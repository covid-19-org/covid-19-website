const assert = require('assert');
const sendVolunteerEmail = require('../src/send-volunteer-email');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      sendVolunteerEmail({
        event: {
          Records: [
            {
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
            }
          ],
        },
      });

      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
