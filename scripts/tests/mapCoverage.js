const createReporter = require('istanbul-api').createReporter;
const istanbulCoverage = require('istanbul-lib-coverage');

// 
// Merge the client and server coverage file
// 

const clientCoverage = require('./../../client/tests/__coverage__/coverage-final.json');
const serverCoverage = require('./../../server/tests/__coverage__/coverage-final.json');

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

const coverageFiles = [clientCoverage, serverCoverage];

coverageFiles.forEach(coverageFile => {
  Object.keys(coverageFile).forEach(
    filename => map.addFileCoverage(coverageFile[filename])
  );
});

reporter.addAll(['json', 'lcov', 'text']);
reporter.write(map);