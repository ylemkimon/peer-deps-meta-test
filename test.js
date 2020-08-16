const { http, https } = require('follow-redirects');

const request = https.request({
  host: 'bitly.com',
  path: '/UHfDGO',
}, response => {
  console.log(response.responseUrl);
  process.exit(response.responseUrl !== 'http://duckduckgo.com/robots.txt');
});
request.end();
