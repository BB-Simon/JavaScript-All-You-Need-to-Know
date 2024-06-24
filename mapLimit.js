const async = require('async');

const urls = [
  'http://example.com/1',
  'http://example.com/2',
  'http://example.com/3',
  'http://example.com/4'
];

function fetchUrl(url, callback) {
  // Simulate an asynchronous operation such as an HTTP request
  setTimeout(() => {
    console.log(`Fetching: ${url}`);
    callback(null, `Content of ${url}`);
  }, 1000);
}

async.mapLimit(urls, 2, fetchUrl, (err, results) => {
  if (err) {
    console.error('An error occurred:', err);
  } else {
    console.log('All URLs have been fetched.');
    console.log('Results:', results);
  }
});
