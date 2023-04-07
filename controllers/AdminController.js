/**
 * The AdminController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AdminService');
const adminCreateMovie4Measure = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminCreateMovie4Measure);
};

const adminCreateMovie4MeasureTag = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminCreateMovie4MeasureTag);
};

const adminCreateMovie4MeasureTagGroup = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminCreateMovie4MeasureTagGroup);
};

const adminGetAppointableUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetAppointableUser);
};

const adminGetAppointmentsOfAnyTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetAppointmentsOfAnyTherapist);
};

const adminGetAvailableSuiteUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetAvailableSuiteUsers);
};

const adminGetCalendarOfAnyTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetCalendarOfAnyTherapist);
};

const adminGetMTherapistPersonalityTypes = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetMTherapistPersonalityTypes);
};

const adminGetMTherapistStrongTypes = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetMTherapistStrongTypes);
};

const adminGetMovie4Measure = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetMovie4Measure);
};

const adminGetMovie4MeasureTagGroups = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetMovie4MeasureTagGroups);
};

const adminGetMovie4MeasureTags = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetMovie4MeasureTags);
};

const adminGetMovie4Measures = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetMovie4Measures);
};

const adminGetPremiumUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetPremiumUsers);
};

const adminGetTherapistAppointmentTimes = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetTherapistAppointmentTimes);
};

const adminGetTherapistPreimunData = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetTherapistPreimunData);
};

const adminGetTherapistReputations = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminGetTherapistReputations);
};

const adminUpdateMovie4Measure = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminUpdateMovie4Measure);
};

const adminUpdateMovie4MeasureTag = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminUpdateMovie4MeasureTag);
};

const adminUpdateMovie4MeasureTagGroup = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminUpdateMovie4MeasureTagGroup);
};

const adminUpdateTherapistPreimunData = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminUpdateTherapistPreimunData);
};

const adminUpdateTherapistReputationStatuses = async (request, response) => {
  await Controller.handleRequest(request, response, service.adminUpdateTherapistReputationStatuses);
};

const cancelAppointmentByAdmin = async (request, response) => {
  await Controller.handleRequest(request, response, service.cancelAppointmentByAdmin);
};

const createAppointmentByAdmin = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppointmentByAdmin);
};

const getOauthAccountsByAdmin = async (request, response) => {
  await Controller.handleRequest(request, response, service.getOauthAccountsByAdmin);
};

const getPostByAdmin = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPostByAdmin);
};

const getWeeklyCalendarByAdmin = async (request, response) => {
  await Controller.handleRequest(request, response, service.getWeeklyCalendarByAdmin);
};

const hidePost = async (request, response) => {
  await Controller.handleRequest(request, response, service.hidePost);
};

const hidePostReply = async (request, response) => {
  await Controller.handleRequest(request, response, service.hidePostReply);
};

const unassignPost = async (request, response) => {
  await Controller.handleRequest(request, response, service.unassignPost);
};


module.exports = {
  adminCreateMovie4Measure,
  adminCreateMovie4MeasureTag,
  adminCreateMovie4MeasureTagGroup,
  adminGetAppointableUser,
  adminGetAppointmentsOfAnyTherapist,
  adminGetAvailableSuiteUsers,
  adminGetCalendarOfAnyTherapist,
  adminGetMTherapistPersonalityTypes,
  adminGetMTherapistStrongTypes,
  adminGetMovie4Measure,
  adminGetMovie4MeasureTagGroups,
  adminGetMovie4MeasureTags,
  adminGetMovie4Measures,
  adminGetPremiumUsers,
  adminGetTherapistAppointmentTimes,
  adminGetTherapistPreimunData,
  adminGetTherapistReputations,
  adminUpdateMovie4Measure,
  adminUpdateMovie4MeasureTag,
  adminUpdateMovie4MeasureTagGroup,
  adminUpdateTherapistPreimunData,
  adminUpdateTherapistReputationStatuses,
  cancelAppointmentByAdmin,
  createAppointmentByAdmin,
  getOauthAccountsByAdmin,
  getPostByAdmin,
  getWeeklyCalendarByAdmin,
  hidePost,
  hidePostReply,
  unassignPost,
};
