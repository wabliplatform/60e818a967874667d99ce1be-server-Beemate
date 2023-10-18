/**
 * The BeeController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BeeService');
const createbee = async (request, response) => {
  await Controller.handleRequest(request, response, service.createbee);
};

const deletebee = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletebee);
};

const getAllbee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllbee);
};

const getByParamsbee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsbee);
};

const getbee = async (request, response) => {
  await Controller.handleRequest(request, response, service.getbee);
};

const updatebee = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatebee);
};


module.exports = {
  createbee,
  deletebee,
  getAllbee,
  getByParamsbee,
  getbee,
  updatebee,
};
