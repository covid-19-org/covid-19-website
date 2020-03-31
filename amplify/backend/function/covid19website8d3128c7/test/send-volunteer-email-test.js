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
    let fakeAWS, sendEmailFake, updateFake;

    beforeEach(() => {
      sendEmailFake = sinon.fake.returns({ promise: sinon.fake.resolves({ MessageId: 'x' }) });
      updateFake = sinon.fake.returns();

      fakeAWS = {
        config: { update: updateFake },
        SES: function() {
          this.sendEmail = sendEmailFake;
        },
      };
    });

    it('configures the eu-west-1 region', () => {
      const returnValue = sendVolunteerEmail({
        AWS: fakeAWS,
        event: { Records: [record] },
      });

      expect(fakeAWS.config.update.args).to.deep.equal([[{region: 'eu-west-1'}]])
    })

    it('returns undefined', () => {
      const returnValue = sendVolunteerEmail({
        AWS: fakeAWS,
        event: { Records: [record] },
      });

      expect(returnValue).to.be.an('undefined');
    });

    it('sends the email with the correct info', () => {
      sendVolunteerEmail({
        AWS: fakeAWS,
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