/**
 * The UsersPremiumController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsersPremiumService');
const allocateTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.allocateTherapist);
};

const createUserMissionComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserMissionComment);
};

const createUserMissionExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserMissionExecution);
};

const deleteUserMissionExecution = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUserMissionExecution);
};

const getConsultationScheduledEvents = async (request, response) => {
  await Controller.handleRequest(request, response, service.getConsultationScheduledEvents);
};

const getUserMissions = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserMissions);
};

const getUserNotifications = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserNotifications);
};

const userHaveUserMissionCommentRead = async (request, response) => {
  await Controller.handleRequest(request, response, service.userHaveUserMissionCommentRead);
};

const userPutTagOnUserMissionComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.userPutTagOnUserMissionComment);
};


module.exports = {
  allocateTherapist,
  createUserMissionComment,
  createUserMissionExecution,
  deleteUserMissionExecution,
  getConsultationScheduledEvents,
  getUserMissions,
  getUserNotifications,
  userHaveUserMissionCommentRead,
  userPutTagOnUserMissionComment,
};
