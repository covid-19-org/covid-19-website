const sinon = require('sinon');
const { expect } = require('chai');

const sendVolunteerEmail = require('../src/send-volunteer-email');

let record = {
  eventID: "cbe95bd2cb49bd0a273ddd2358b73c0e",
  eventName: "INSERT",
  dynamodb: {
    NewImage: {
      fullName: {
        S: "Joe Bloggs"
      },
      email: {
        S: "joe@bloggs.com"
      }
    }
  }
};

describe('send-volunteer-email', function() {
  describe('#sendVolunteerEmail()', function() {
    let fakeSES, sendEmailFake;

    beforeEach(() => {
      sendEmailFake = sinon.fake.returns({ promise: sinon.fake.resolves({ MessageId: 'x' }) });

      fakeSES = function() {
        this.sendEmail = sendEmailFake;
      };
    });

    it('returns undefined', () => {
      const returnValue = sendVolunteerEmail({
        SES: fakeSES,
        event: { Records: [record] },
      });

      expect(returnValue).to.be.an('undefined');
    });

    it('sends the email with the correct info', () => {
      sendVolunteerEmail({
        SES: fakeSES,
        event: { Records: [record] },
      });

      expect(sendEmailFake.args).to.deep.equal([
        [
          {
            "Destination": {
              "ToAddresses": [
                "hello@keithbro.com"
              ]
            },
            "Message": {
              "Body": {
                "Text": {
                  "Charset": "UTF-8",
                  "Data": "TEXT_FORMAT_BODY"
                }
              },
              "Subject": {
                "Charset": "UTF-8",
                "Data": "Test Email"
              }
            },
            "Source": "noreply@code4covid.org",
          }
        ]
      ]);
    });
  });
});