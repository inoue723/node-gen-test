/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* associate the user with the therapist
*
* allocateTherapistRequest AllocateTherapistRequest 
* no response value expected for this operation
* */
const allocateTherapist = ({ allocateTherapistRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        allocateTherapistRequest,
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
* save a comment on a mission
*
* userMissionCommentRequest UserMissionCommentRequest 
* returns user_mission_comment
* */
const createUserMissionComment = ({ userMissionCommentRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionCommentRequest,
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
* save that user has completed the mission
*
* userMissionExecutionRequest UserMissionExecutionRequest 
* returns user_mission_execution
* */
const createUserMissionExecution = ({ userMissionExecutionRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionExecutionRequest,
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
* delete that user has completed the mission
*
* userMissionExecutionId String 
* no response value expected for this operation
* */
const deleteUserMissionExecution = ({ userMissionExecutionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionExecutionId,
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
* get appointments
*
* consultationType ConsultationType  (optional)
* returns List
* */
const getConsultationScheduledEvents = ({ consultationType }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        consultationType,
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
* get user's missions
*
* returns List
* */
const getUserMissions = () => new Promise(
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
/**
* get user notifications
*
* startDate String 開始日 (optional)
* endDate String 終了日 (optional)
* timezone String タイムゾーン (optional)
* returns List
* */
const getUserNotifications = ({ startDate, endDate, timezone }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        startDate,
        endDate,
        timezone,
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
* have mission comment read
*
* id String 
* no response value expected for this operation
* */
const userHaveUserMissionCommentRead = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
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
* put tag on comment
*
* userMissionCommentTagRequest UserMissionCommentTagRequest 
* returns user_mission_comment_tag
* */
const userPutTagOnUserMissionComment = ({ userMissionCommentTagRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionCommentTagRequest,
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
