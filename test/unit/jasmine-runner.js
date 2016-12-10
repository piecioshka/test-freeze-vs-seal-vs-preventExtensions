'use strict';

let Jasmine = require('jasmine');
let SpecReporter = require('jasmine-spec-reporter');
let jrunner = new Jasmine();

const OPTIONS = {
    displayStacktrace: 'none',

    displaySuccessesSummary: false,
    displayFailuresSummary: false,
    displayPendingSummary: false,

    displaySuccessfulSpec: true,
    displayFailedSpec: true,
    displayPendingSpec: true,

    displaySpecDuration: true,
    displaySuiteNumber: true,
    colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
    },
    prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
    },
    customProcessors: []
};

jrunner.loadConfigFile('test/unit/jasmine.json');
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter(OPTIONS));
jrunner.execute();
