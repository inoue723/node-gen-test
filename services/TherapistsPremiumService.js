/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* cancel appointment
*
* id String 
* cancelAppointmentParams CancelAppointmentParams  (optional)
* returns appointment
* */
const cancelAppointmentByTherapist = ({ id, cancelAppointmentParams }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        cancelAppointmentParams,
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
* create appointment
*
* createAppointmentByTherapistRequest CreateAppointmentByTherapistRequest 
* returns appointment
* */
const createAppointmentByTherapist = ({ createAppointmentByTherapistRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createAppointmentByTherapistRequest,
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
* create user overall records
*
* createUserOverallRecordsRequest CreateUserOverallRecordsRequest 
* returns user_overall_record
* */
const createUserOverallRecords = ({ createUserOverallRecordsRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserOverallRecordsRequest,
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
* create user mission
*
* userMissionCreateRequest UserMissionCreateRequest 
* returns user_mission
* */
const createUserTherapistMissions = ({ userMissionCreateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionCreateRequest,
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
* delete oauth account
*
* id String 
* no response value expected for this operation
* */
const deleteOauthAccount = ({ id }) => new Promise(
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
* get appointments by therapist
*
* userId BigDecimal  (optional)
* minStartTime Date  (optional)
* maxStartTime Date  (optional)
* type AppointmentType  (optional)
* canceled Boolean  (optional)
* returns List
* */
const getAppointmentsByTherapist = ({ userId, minStartTime, maxStartTime, type, canceled }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        minStartTime,
        maxStartTime,
        type,
        canceled,
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
* get calendar of mine
*
* appointmentType AppointmentType 
* timezone String タイムゾーン (optional)
* startDate String 開始日 (optional)
* endDate String 終了日 (optional)
* forPreview Boolean  (optional)
* returns calendar
* */
const getCalendarOfMine = ({ appointmentType, timezone, startDate, endDate, forPreview }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        appointmentType,
        timezone,
        startDate,
        endDate,
        forPreview,
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
* get oauth accounts
*
* provider OauthProvider  (optional)
* returns List
* */
const getOauthAccountsByTherapist = ({ provider }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        provider,
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
* get user overall records
*
* userId BigDecimal 
* returns List
* */
const getUserOverallRecords = ({ userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
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
* get user missions
*
* userId BigDecimal 
* returns List
* */
const getUserTherapistMissions = ({ userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
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
const therapistCreateUserMissionComment = ({ userMissionCommentRequest }) => new Promise(
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
* have mission comment read
*
* id String 
* no response value expected for this operation
* */
const therapistHaveUserMissionCommentRead = ({ id }) => new Promise(
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
const therapistPutTagOnUserMissionComment = ({ userMissionCommentTagRequest }) => new Promise(
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
/**
* update schedule
*
* schedule Schedule 
* returns schedule
* */
const updateSchedule = ({ schedule }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        schedule,
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
* update user overall record
*
* id String 
* updateUserOverallRecordRequest UpdateUserOverallRecordRequest 
* no response value expected for this operation
* */
const updateUserOverallRecord = ({ id, updateUserOverallRecordRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        updateUserOverallRecordRequest,
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
* update user mission
*
* id String 
* userMissionUpdateRequest UserMissionUpdateRequest 
* no response value expected for this operation
* */
const updateUserTherapistMission = ({ id, userMissionUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        userMissionUpdateRequest,
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
