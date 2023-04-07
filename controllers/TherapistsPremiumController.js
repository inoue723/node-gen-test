/**
 * The TherapistsPremiumController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TherapistsPremiumService');
const cancelAppointmentByTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.cancelAppointmentByTherapist);
};

const createAppointmentByTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppointmentByTherapist);
};

const createUserOverallRecords = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserOverallRecords);
};

const createUserTherapistMissions = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserTherapistMissions);
};

const deleteOauthAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteOauthAccount);
};

const getAppointmentsByTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAppointmentsByTherapist);
};

const getCalendarOfMine = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCalendarOfMine);
};

const getOauthAccountsByTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.getOauthAccountsByTherapist);
};

const getUserOverallRecords = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserOverallRecords);
};

const getUserTherapistMissions = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserTherapistMissions);
};

const therapistCreateUserMissionComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.therapistCreateUserMissionComment);
};

const therapistHaveUserMissionCommentRead = async (request, response) => {
  await Controller.handleRequest(request, response, service.therapistHaveUserMissionCommentRead);
};

const therapistPutTagOnUserMissionComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.therapistPutTagOnUserMissionComment);
};

const updateSchedule = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSchedule);
};

const updateUserOverallRecord = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserOverallRecord);
};

const updateUserTherapistMission = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserTherapistMission);
};


module.exports = {
  cancelAppointmentByTherapist,
  createAppointmentByTherapist,
  createUserOverallRecords,
  createUserTherapistMissions,
  deleteOauthAccount,
  getAppointmentsByTherapist,
  getCalendarOfMine,
  getOauthAccountsByTherapist,
  getUserOverallRecords,
  getUserTherapistMissions,
  therapistCreateUserMissionComment,
  therapistHaveUserMissionCommentRead,
  therapistPutTagOnUserMissionComment,
  updateSchedule,
  updateUserOverallRecord,
  updateUserTherapistMission,
};
