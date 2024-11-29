const newman = require('newman');
require('dotenv').config();

newman.run({
    collection:'https://api.postman.com/collections/39878667-7dd00b54-c3cb-466b-89ff-4ff0e17a0395?access_key=${process.env.access_key}',
    collection: require('./shut.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err;}
    console.log('collection run complete!');
});