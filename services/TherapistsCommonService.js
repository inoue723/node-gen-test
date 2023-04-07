/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
*
* id String 
* no response value expected for this operation
* */
const assignPost = ({ id }) => new Promise(
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
*
* completeConsultationSupport CompleteConsultationSupport 
* no response value expected for this operation
* */
const completeConsultationSupport = ({ completeConsultationSupport }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        completeConsultationSupport,
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
*
* createPostReply CreatePostReply 
* returns post
* */
const createPostReplyByTherapist = ({ createPostReply }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createPostReply,
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
* create schedule setting
*
* scheduleSetting ScheduleSetting  (optional)
* returns schedule_setting
* */
const createScheduleSetting = ({ scheduleSetting }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        scheduleSetting,
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
*
* no response value expected for this operation
* */
const createTroublePostNotificationSettings = () => new Promise(
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
* post user goal
*
* userId BigDecimal 
* userTherapistGoalRequest UserTherapistGoalRequest 
* no response value expected for this operation
* */
const createUserTherapistGoal = ({ userId, userTherapistGoalRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        userTherapistGoalRequest,
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
*
* no response value expected for this operation
* */
const deleteTroublePostNotificationSettings = () => new Promise(
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
* get assignable limit
*
* mGrade MGrade  (optional)
* returns List
* */
const getAssignableLimit = ({ mGrade }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        mGrade,
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
*
* returns List
* */
const getConsultationSupports = () => new Promise(
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
* get current assigned number
*
* returns current_assigned_number
* */
const getCurrentAssignedNumber = () => new Promise(
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
* get movie tags
*
* returns List
* */
const getMovie4MeasureTagGroups = () => new Promise(
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
* get movies
*
* version String |version|description| |---|---| |1.0|for standard and advanced| |2.0|for premium|  (optional)
* returns List
* */
const getMovie4Measures2 = ({ version }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        version,
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
*
* size Integer  (optional)
* page Integer  (optional)
* returns get_posts_response
* */
const getNotAssignedPosts = ({ size, page }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        size,
        page,
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
*
* returns List
* */
const getOverallRecordPainTypes = () => new Promise(
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
*
* id String 
* returns post
* */
const getPostByTherapist = ({ id }) => new Promise(
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
*
* returns List
* */
const getReplyRequiredPosts = () => new Promise(
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
* get schedule setting
*
* userId BigDecimal 
* returns schedule_setting
* */
const getScheduleSetting = ({ userId }) => new Promise(
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
* get therapist user info
*
* returns therapist
* */
const getTherapistMyUserInfo = () => new Promise(
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
*
* returns troublePostNotificationSettings
* */
const getTroublePostNotificationSettings = () => new Promise(
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
*
* id String 
* size Integer  (optional)
* page Integer  (optional)
* returns get_posts_response
* */
const getUserAllPosts = ({ id, size, page }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        size,
        page,
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
* get user goal
*
* userId BigDecimal 
* returns user_therapist_goal
* */
const getUserTherapistGoal = ({ userId }) => new Promise(
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
* get assined users list
*
* mGradeId Integer |MGradeId|gradeName| |---|---| |1|スタンダード| |2|アドバンスド| |3|プレミアム| 
* returns user_therapist_response
* */
const getUserTherapists = ({ mGradeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        mGradeId,
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
* update assignable limit
*
* updateUnderscoreassignUnderscorelimitUnderscorerequestUnderscoreinner List  (optional)
* returns List
* */
const updateAssignableLimit = ({ updateUnderscoreassignUnderscorelimitUnderscorerequestUnderscoreinner }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUnderscoreassignUnderscorelimitUnderscorerequestUnderscoreinner,
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
