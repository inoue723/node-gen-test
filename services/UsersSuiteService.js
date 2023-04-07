/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* createTempUserOfSuite
*
* createTempUserOfSuiteRequest CreateTempUserOfSuiteRequest 
* no response value expected for this operation
* */
const createTempUserOfSuite = ({ createTempUserOfSuiteRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createTempUserOfSuiteRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* get assignments
*
* returns List
* */
const getAssignments = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createTempUserOfSuite,
  getAssignments,
};
