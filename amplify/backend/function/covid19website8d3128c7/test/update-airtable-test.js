const sinon = require('sinon');
const { expect } = require('chai');

const updateAirtable = require('../src/update-airtable');

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

describe('update-airtable', function() {
  describe('#updateAirtable()', function() {
    let fakeAirtable, fakeTable, fakeWorkspace, fakeBase, args;

    beforeEach(() => {
      fakeTable = { create: sinon.fake.resolves('x') }
      fakeWorkspace = sinon.fake.returns(fakeTable)
      fakeBase = sinon.fake.returns(fakeWorkspace)
      fakeAirtable = sinon.fake.returns({ base: fakeBase })

      args = {
        Airtable: fakeAirtable,
        env: {
          AIRTABLE_API_KEY: 'YOUR_API_KEY',
          AIRTABLE_TABLE: "TestTable",
          AIRTABLE_BASE_ID: "appsUdzJfCfL7rXnU",
        },
        event: { Records: [record] },
      }
   });

    it('uses the correct env vars to make the call', () => {
      const returnValue = updateAirtable(args);

      expect(fakeAirtable.calledWithNew()).to.equal(true)
      expect(fakeAirtable.args).to.deep.equal([[{ apiKey: 'YOUR_API_KEY' }]])
      expect(fakeBase.args).to.deep.equal([['appsUdzJfCfL7rXnU']])
      expect(fakeWorkspace.args).to.deep.equal([['TestTable']])
    })

    it('returns the resolved value of the create call', async () => {
      const returnValue = await updateAirtable(args);

      expect(returnValue).to.deep.equal('x')
    });

    it('creates the record in Airtable', () => {
      const returnValue = updateAirtable(args);

      expect(fakeTable.create.args).to.deep.equal([
        [
          [
            {
              fields: {
                email: "joe@bloggs.com",
                fullName: "Joe Bloggs",
              },
            }
          ]
        ]
      ]);
    });
  });
});