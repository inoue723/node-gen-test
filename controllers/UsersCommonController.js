/**
 * The UsersCommonController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsersCommonService');
const cancelAppointmentByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.cancelAppointmentByUser);
};

const checkHasAnsweredReputation = async (request, response) => {
  await Controller.handleRequest(request, response, service.checkHasAnsweredReputation);
};

const createAppointmentByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppointmentByUser);
};

const createFavoritePostCategories = async (request, response) => {
  await Controller.handleRequest(request, response, service.createFavoritePostCategories);
};

const createPost = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPost);
};

const createPostReaction = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPostReaction);
};

const createPostReplyByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPostReplyByUser);
};

const createPostReplyReaction = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPostReplyReaction);
};

const createTherapistReputation = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTherapistReputation);
};

const createUnverifiedUserSubEmail = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUnverifiedUserSubEmail);
};

const createUserConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserConfig);
};

const createUserEmailNotificationSchedules = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserEmailNotificationSchedules);
};

const deleteSubEmail = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSubEmail);
};

const getAppointableTherapists = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAppointableTherapists);
};

const getCalendarOfMyTherapist = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCalendarOfMyTherapist);
};

const getCompanyCodeByNoAuthUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompanyCodeByNoAuthUser);
};

const getCompanyConfigs = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompanyConfigs);
};

const getCompanyConfigsByNoAuthUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompanyConfigsByNoAuthUser);
};

const getCompanyInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCompanyInfo);
};

const getFavoritePostCategories = async (request, response) => {
  await Controller.handleRequest(request, response, service.getFavoritePostCategories);
};

const getLatestUserPlanStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getLatestUserPlanStatus);
};

const getMyAppointments = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyAppointments);
};

const getMyCompanyInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyCompanyInfo);
};

const getMyPosts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyPosts);
};

const getMyTherapistInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyTherapistInfo);
};

const getMyTherapistWithInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyTherapistWithInfo);
};

const getMyUserGoal = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyUserGoal);
};

const getMyUserInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMyUserInfo);
};

const getNoAuthUserInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.getNoAuthUserInfo);
};

const getPostByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPostByUser);
};

const getPostsByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPostsByUser);
};

const getPostsCountOfMineThisMonth = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPostsCountOfMineThisMonth);
};

const getReputationUnansweredAppointments = async (request, response) => {
  await Controller.handleRequest(request, response, service.getReputationUnansweredAppointments);
};

const getSelectedTherapistCalendar = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSelectedTherapistCalendar);
};

const getSimilarMovies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSimilarMovies);
};

const getTherapistByUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTherapistByUser);
};

const getUserConfig = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserConfig);
};

const getUserConfigs = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserConfigs);
};

const getUserEmailNotificationSchedules = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserEmailNotificationSchedules);
};

const getUserEmails = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserEmails);
};

const getUserStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserStatus);
};

const getWeeklyCalendar = async (request, response) => {
  await Controller.handleRequest(request, response, service.getWeeklyCalendar);
};

const resendVerificationMail = async (request, response) => {
  await Controller.handleRequest(request, response, service.resendVerificationMail);
};

const switchEmailAndSubEmail = async (request, response) => {
  await Controller.handleRequest(request, response, service.switchEmailAndSubEmail);
};

const undoPostReaction = async (request, response) => {
  await Controller.handleRequest(request, response, service.undoPostReaction);
};

const undoPostReplyReaction = async (request, response) => {
  await Controller.handleRequest(request, response, service.undoPostReplyReaction);
};

const updateNoAuthUserRequiredInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateNoAuthUserRequiredInfo);
};

const updateUserMissionMovie = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserMissionMovie);
};

const updateUserMissionNotifications = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserMissionNotifications);
};

const updateUserRequiredInfo = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserRequiredInfo);
};


module.exports = {
  cancelAppointmentByUser,
  checkHasAnsweredReputation,
  createAppointmentByUser,
  createFavoritePostCategories,
  createPost,
  createPostReaction,
  createPostReplyByUser,
  createPostReplyReaction,
  createTherapistReputation,
  createUnverifiedUserSubEmail,
  createUserConfig,
  createUserEmailNotificationSchedules,
  deleteSubEmail,
  getAppointableTherapists,
  getCalendarOfMyTherapist,
  getCompanyCodeByNoAuthUser,
  getCompanyConfigs,
  getCompanyConfigsByNoAuthUser,
  getCompanyInfo,
  getFavoritePostCategories,
  getLatestUserPlanStatus,
  getMyAppointments,
  getMyCompanyInfo,
  getMyPosts,
  getMyTherapistInfo,
  getMyTherapistWithInfo,
  getMyUserGoal,
  getMyUserInfo,
  getNoAuthUserInfo,
  getPostByUser,
  getPostsByUser,
  getPostsCountOfMineThisMonth,
  getReputationUnansweredAppointments,
  getSelectedTherapistCalendar,
  getSimilarMovies,
  getTherapistByUser,
  getUserConfig,
  getUserConfigs,
  getUserEmailNotificationSchedules,
  getUserEmails,
  getUserStatus,
  getWeeklyCalendar,
  resendVerificationMail,
  switchEmailAndSubEmail,
  undoPostReaction,
  undoPostReplyReaction,
  updateNoAuthUserRequiredInfo,
  updateUserMissionMovie,
  updateUserMissionNotifications,
  updateUserRequiredInfo,
};
