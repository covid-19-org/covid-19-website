const { SES } = require('aws-sdk');
const sendVolunteerEmail = require('./send-volunteer-email')

exports.handler = function(event, context) {
  console.log(JSON.stringify(event, null, 2));
  return sendVolunteerEmail({ SES, event })
  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};
