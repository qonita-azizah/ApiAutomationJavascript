const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);
const { expect } = require('chai');
const page = require('../page/get_pet_by_id.js');
const pageAddPet = require('../page/add_pet_page.js');
const data = require('../data/add_pet_data.js');

const getPetById = async () =>{
    const addpet = await pageAddPet.addPet('Cat1');
    const id = addpet.body.id;
    const getPetById = await page.getPetById(id);
    console.log(getPetById.body);
    
    return getPetById;
}

module.exports = {
getPetById
}