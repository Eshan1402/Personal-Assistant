import Parser from 'rss-parser';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const parser = new Parser();

// 1. Fetch from RSS (Reliable, No Bot Protection)
async function fetchJobsFromRSS() {
  console.log("Fetching jobs from RSS feeds...");
  const jobs = [];
  
  // Example: We Work Remotely - Programming Jobs
  const feedUrl = 'https://weworkremotely.com/categories/remote-programming-jobs.rss';
  
  try {
    const feed = await parser.parseURL(feedUrl);
    
    feed.items.forEach(item => {
      // Basic extraction from RSS fields
      jobs.push({
        title: item.title || "Software Engineer",
        company: item.creator || "Tech Company",
        time: "Just now", // In a real app, parse item.pubDate
        tags: [
          { label: "Remote", type: "orange" },
          { label: "Full-time", type: "green" }
        ],
        source: "WeWorkRemotely"
      });
    });
    console.log(`Found ${jobs.length} jobs via RSS.`);
  } catch (err) {
    console.error("Error fetching RSS:", err.message);
  }
  
  return jobs.slice(0, 5); // Return top 5 for UI
}

// 2. Scrape from a site using Puppeteer (Prone to CAPTCHAs on GitHub Actions)
async function scrapeJobsWithPuppeteer() {
  console.log("Starting Puppeteer scraper...");
  const jobs = [];
  
  try {
    // Launch headless browser. Note: In CI/CD, we must use specific args.
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Using a simpler site for demonstration that is less aggressive than LinkedIn
    // For LinkedIn, you often need premium proxies or logged-in session cookies.
    await page.goto('https://news.ycombinator.com/jobs', { waitUntil: 'networkidle2' });
    
    // Extract job titles from Hacker News Jobs page
    const scrapedTitles = await page.evaluate(() => {
      const titleElements = document.querySelectorAll('.titleline > a');
      const results = [];
      titleElements.forEach((el, index) => {
        if (index < 3) results.push(el.innerText);
      });
      return results;
    });
    
    scrapedTitles.forEach(title => {
      jobs.push({
        title: title.length > 50 ? title.substring(0, 47) + "..." : title,
        company: "Y Combinator Startup",
        time: "Today",
        tags: [
          { label: "Startup", type: "orange" }
        ],
        source: "HN"
      });
    });

    await browser.close();
    console.log(`Scraped ${jobs.length} jobs via Puppeteer.`);
  } catch (err) {
    console.error("Puppeteer scraping failed (possibly blocked):", err.message);
  }
  
  return jobs;
}

// 3. Simple Keyword Matching Algorithm (Zero API Cost)
const myResumeSkills = [
  "react", "next.js", "node.js", "typescript", "javascript", 
  "tailwind", "ai", "machine learning", "python", "aws", "docker"
];

function scoreJob(job) {
  let score = 0;
  // Convert everything to lowercase for case-insensitive matching
  const searchString = `${job.title} ${job.company} ${job.tags?.map(t => t.label).join(" ") || ""}`.toLowerCase();
  
  myResumeSkills.forEach(skill => {
    if (searchString.includes(skill.toLowerCase())) {
      score += 1;
    }
  });
  
  return { ...job, matchScore: score };
}

// 4. Main pipeline to run both, score, and save to JSON
async function runJobPipeline() {
  const rssJobs = await fetchJobsFromRSS();
  const scrapedJobs = await scrapeJobsWithPuppeteer();
  
  let allJobs = [...rssJobs, ...scrapedJobs];
  
  // Score jobs against resume skills
  allJobs = allJobs.map(scoreJob);
  
  // Sort by highest match score
  allJobs.sort((a, b) => b.matchScore - a.matchScore);
  
  const outputPath = path.join(process.cwd(), 'public', 'jobs.json');
  fs.writeFileSync(outputPath, JSON.stringify(allJobs, null, 2));
  
  console.log(`Successfully scored and saved ${allJobs.length} jobs to public/jobs.json!`);
}

runJobPipeline();
