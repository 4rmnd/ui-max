/**
 * Fallback Web Content Extractor
 * Usage: node extract_page.js <url>
 */

const https = require('https');
const http = require('http');

const url = process.argv[2];
if (!url) {
  console.error('Usage: node extract_page.js <url>');
  process.exit(1);
}

const client = url.startsWith('https') ? https : http;
const req = client.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  }
}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Length: ${data.length} bytes`);
    if (res.statusCode >= 400) {
      console.log('HTTP Fetch failed. Use chrome-devtools MCP tools to inspect directly.');
    } else {
      console.log('Content fetched successfully.');
    }
  });
});

req.on('error', err => {
  console.error('Network Error:', err.message);
  console.log('Fallback to chrome-devtools MCP tools.');
});
