/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Bee } = require('../models/Bee');

/**
* Creates the data
*
* bee Bee data to be created
* returns bee
* */
const createbee = ({ bee }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Bee(bee).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* beeId String the Id parameter
* no response value expected for this operation
* */
const deletebee = ({ beeId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Bee.findOneAndDelete({ _id:beeId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllbee = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Bee.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamsbee = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Bee.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* beeId String the Id parameter
* returns bee
* */
const getbee = ({ beeId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Bee.findById(beeId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* beeId String the Id parameter
* bee Bee data to be updated (optional)
* returns bee
* */
const updatebee = ({ beeId, bee }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Bee.findOneAndUpdate({ _id:beeId },bee).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createbee,
  deletebee,
  getAllbee,
  getByParamsbee,
  getbee,
  updatebee,
};
