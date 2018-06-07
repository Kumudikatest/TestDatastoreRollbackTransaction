let AWS = require('aws-sdk');
let _auth = require('./Authorizer');
let google = require('googleapis').google;
const datastore = google.datastore('v1');
exports.handler = function (event, context, callback) {
	// datastore.projects.beginTransaction({
	// 	projectId: process.env.GCLOUD_PROJECT_ID,
	// 	resource: {
	// 		transactionOptions: {
	// 			readWrite: {}
	// 		}
	// 	}
	// }).then(response => {
	// 	console.log(response.data);           // successful response
	//     /*
	//     response.data = {
	//         "transaction": "<transaction ID>"
	//     }
	//     */
	// })
	// 	.catch(err => {
	// 		console.log(err, err.stack); // an error occurred
	// 	});
	datastore.projects.rollback({
		projectId: process.env.GCLOUD_PROJECT_ID,
		resource: {
			transaction: "EeJon/BQCWzGIlkAp8GhxZ1ARCZk0W28NQPE0LZdbfodltErN6Zj+rCte6MOcPFk+O4kCP0fKN4HPdWPxbwVMfk58JIEQHI3WuSHTAFNGmUgsYWw9Vp6hGcZCa9UgtxOGVuLvw=="
		}
	}).then(response => {
		console.log(response.data);           // successful response
        /*
        response.data = {}
        */
	})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});

	callback(null, 'Successfully executed');
}