const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));
const page = require('../page/add_pet_page.js');
const data = require('../data/add_pet_data.js');
const schema = require('../schema/add_pet_schema.json');

const testCase = {
    describe: 'add pet data',
    positive: {
        validParams: 'As a User, I want to add pet data',
    },
};

const payloads = ['Cat1', 'Cat2'];

describe(`@post ${testCase.describe}`, () => {
    payloads.forEach((petName) => {
        it(`@positive ${testCase.positive.validParams} with pet name: ${petName}`, async () => {
            const response = await page.addPet(data.addPet(petName));

            assert(response.status).to.equal(200);
            assert(response.body.name).to.equal(petName);
			assert(response.body).to.be.jsonSchema(schema);
        });
    });
});