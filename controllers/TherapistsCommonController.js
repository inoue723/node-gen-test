/**
 * The TherapistsCommonController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TherapistsCommonService');
const assignPost = async (request, response) => {
  await Controller.handleRequest(request, response, service.assignPost);
};

const completeConsultationSupport = async (request, response) => {
  await Controller.handleRequest(request, response, service.completeConsultationSupport);
};

const createPostReplyByTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPostReplyByTherapist);
};

const createScheduleSetting = async (request, response) => {
  await Controller.handleRequest(request, response, service.createScheduleSetting);
};

const createTroublePostNotificationSettings = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTroublePostNotificationSettings);
};

const createUserTherapistGoal = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserTherapistGoal);
};

const deleteTroublePostNotificationSettings = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTroublePostNotificationSettings);
};

const getAssignableLimit = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAssignableLimit);
};

const getConsultationSupports = async (request, response) => {
  await Controller.handleRequest(request, response, service.getConsultationSupports);
};

const getCurrentAssignedNumber = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCurrentAssignedNumber);
};

const getMovie4MeasureTagGroups = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMovie4MeasureTagGroups);
};

const getMovie4Measures2 = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMovie4Measures2);
};

const getNotAssignedPosts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getNotAssignedPosts);
};

const getOverallRecordPainTypes = async (request, response) => {
  await Controller.handleRequest(request, response, service.getOverallRecordPainTypes);
};

const getPostByTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPostByTherapist);
};

const getReplyRequiredPosts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getReplyRequiredPosts);
};

const getScheduleSetting = async (request, response) => {
  await Controller.handleRequest(request, response, service.getScheduleSetting);
};

const getTherapistMyUserInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTherapistMyUserInfo);
};

const getTroublePostNotificationSettings = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTroublePostNotificationSettings);
};

const getUserAllPosts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserAllPosts);
};

const getUserTherapistGoal = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserTherapistGoal);
};

const getUserTherapists = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserTherapists);
};

const updateAssignableLimit = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateAssignableLimit);
};


module.exports = {
  assignPost,
  completeConsultationSupport,
  createPostReplyByTherapist,
  createScheduleSetting,
  createTroublePostNotificationSettings,
  createUserTherapistGoal,
  deleteTroublePostNotificationSettings,
  getAssignableLimit,
  getConsultationSupports,
  getCurrentAssignedNumber,
  getMovie4MeasureTagGroups,
  getMovie4Measures2,
  getNotAssignedPosts,
  getOverallRecordPainTypes,
  getPostByTherapist,
  getReplyRequiredPosts,
  getScheduleSetting,
  getTherapistMyUserInfo,
  getTroublePostNotificationSettings,
  getUserAllPosts,
  getUserTherapistGoal,
  getUserTherapists,
  updateAssignableLimit,
};
