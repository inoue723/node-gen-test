/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* create a movie
*
* movieForMeasureUpdateRequest MovieForMeasureUpdateRequest 
* returns movie_for_measure
* */
const adminCreateMovie4Measure = ({ movieForMeasureUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movieForMeasureUpdateRequest,
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
* create a movie tag
*
* movieForMeasureTagUpdateRequest MovieForMeasureTagUpdateRequest 
* returns movie_for_measure_tag
* */
const adminCreateMovie4MeasureTag = ({ movieForMeasureTagUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movieForMeasureTagUpdateRequest,
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
* create a movie tag group
*
* movieForMeasureTagGroupUpdateRequest MovieForMeasureTagGroupUpdateRequest 
* returns movie_for_measure_tag_group
* */
const adminCreateMovie4MeasureTagGroup = ({ movieForMeasureTagGroupUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movieForMeasureTagGroupUpdateRequest,
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
* get user if appointable
*
* id String 
* returns admin_appointable_user
* */
const adminGetAppointableUser = ({ id }) => new Promise(
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
* get appointments of any therapist
*
* therapistId BigDecimal  (optional)
* userId BigDecimal  (optional)
* minStartTime Date  (optional)
* maxStartTime Date  (optional)
* type AppointmentType  (optional)
* canceled Boolean  (optional)
* returns List
* */
const adminGetAppointmentsOfAnyTherapist = ({ therapistId, userId, minStartTime, maxStartTime, type, canceled }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        therapistId,
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
* get available suite users
*
* returns List
* */
const adminGetAvailableSuiteUsers = () => new Promise(
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
* get the calendar of any therapist
*
* appointmentType AppointmentType 
* therapistId BigDecimal  (optional)
* timezone String タイムゾーン (optional)
* startDate String 開始日 (optional)
* endDate String 終了日 (optional)
* canReserveWithin24Hours Boolean  (optional)
* returns calendar
* */
const adminGetCalendarOfAnyTherapist = ({ appointmentType, therapistId, timezone, startDate, endDate, canReserveWithin24Hours }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        appointmentType,
        therapistId,
        timezone,
        startDate,
        endDate,
        canReserveWithin24Hours,
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
* get mTherapistPersonalityTypes
*
* returns List
* */
const adminGetMTherapistPersonalityTypes = () => new Promise(
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
* get MTherapistStrongTypes
*
* returns List
* */
const adminGetMTherapistStrongTypes = () => new Promise(
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
* get a movie
*
* id BigDecimal 
* returns movie_for_measure
* */
const adminGetMovie4Measure = ({ id }) => new Promise(
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
* get movie tag groups
*
* returns List
* */
const adminGetMovie4MeasureTagGroups = () => new Promise(
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
const adminGetMovie4MeasureTags = () => new Promise(
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
* returns List
* */
const adminGetMovie4Measures = () => new Promise(
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
* get admin therapist premium data
*
* id BigDecimal 
* returns List
* */
const adminGetPremiumUsers = ({ id }) => new Promise(
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
* get admin therapist appointment times
*
* returns List
* */
const adminGetTherapistAppointmentTimes = () => new Promise(
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
* get admin therapist premium data
*
* id BigDecimal 
* returns admin_therapist_premium
* */
const adminGetTherapistPreimunData = ({ id }) => new Promise(
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
const adminGetTherapistReputations = () => new Promise(
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
* update movie
*
* id BigDecimal 
* movieForMeasureUpdateRequest MovieForMeasureUpdateRequest 
* no response value expected for this operation
* */
const adminUpdateMovie4Measure = ({ id, movieForMeasureUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        movieForMeasureUpdateRequest,
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
* update movie tag
*
* id BigDecimal 
* movieForMeasureTagUpdateRequest MovieForMeasureTagUpdateRequest 
* returns movie_for_measure_tag
* */
const adminUpdateMovie4MeasureTag = ({ id, movieForMeasureTagUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        movieForMeasureTagUpdateRequest,
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
* update movie tag group
*
* id BigDecimal 
* movieForMeasureTagGroupUpdateRequest MovieForMeasureTagGroupUpdateRequest 
* returns movie_for_measure_tag_group
* */
const adminUpdateMovie4MeasureTagGroup = ({ id, movieForMeasureTagGroupUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        movieForMeasureTagGroupUpdateRequest,
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
* id BigDecimal 
* adminTherapistPremiumDataUpdateRequest AdminTherapistPremiumDataUpdateRequest 
* returns admin_therapist_premium
* */
const adminUpdateTherapistPreimunData = ({ id, adminTherapistPremiumDataUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        adminTherapistPremiumDataUpdateRequest,
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
* id BigDecimal 
* adminTherapistReputationStatusUpdateRequest AdminTherapistReputationStatusUpdateRequest 
* no response value expected for this operation
* */
const adminUpdateTherapistReputationStatuses = ({ id, adminTherapistReputationStatusUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        adminTherapistReputationStatusUpdateRequest,
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
* cancel appointment
*
* id String 
* cancelAppointmentParams CancelAppointmentParams  (optional)
* returns appointment
* */
const cancelAppointmentByAdmin = ({ id, cancelAppointmentParams }) => new Promise(
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
* createAppointmentByAdminRequest CreateAppointmentByAdminRequest 
* returns appointment
* */
const createAppointmentByAdmin = ({ createAppointmentByAdminRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createAppointmentByAdminRequest,
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
* userId BigDecimal  (optional)
* returns List
* */
const getOauthAccountsByAdmin = ({ provider, userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        provider,
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
*
* id String 
* returns post
* */
const getPostByAdmin = ({ id }) => new Promise(
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
* admin get weekly calendar
*
* timezone String タイムゾーン (optional)
* startDate String 開始日 (optional)
* mGrade MGrade  (optional)
* returns Map
* */
const getWeeklyCalendarByAdmin = ({ timezone, startDate, mGrade }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        timezone,
        startDate,
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
* id String 
* hidePostRequest HidePostRequest 
* no response value expected for this operation
* */
const hidePost = ({ id, hidePostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        hidePostRequest,
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
* hidePostRequest HidePostRequest 
* no response value expected for this operation
* */
const hidePostReply = ({ id, hidePostRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        hidePostRequest,
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
* no response value expected for this operation
* */
const unassignPost = ({ id }) => new Promise(
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
