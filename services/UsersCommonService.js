/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* cancel appointment
*
* id String 
* cancelAppointmentParams CancelAppointmentParams  (optional)
* returns appointment
* */
const cancelAppointmentByUser = ({ id, cancelAppointmentParams }) => new Promise(
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
* check has answered reputation
*
* appointmentId String 
* returns therapist_reputation_has_answered
* */
const checkHasAnsweredReputation = ({ appointmentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        appointmentId,
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
* createAppointmentRequest CreateAppointmentRequest 
* returns appointment
* */
const createAppointmentByUser = ({ createAppointmentRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createAppointmentRequest,
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
* createFavoritePostCategories CreateFavoritePostCategories 
* no response value expected for this operation
* */
const createFavoritePostCategories = ({ createFavoritePostCategories }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createFavoritePostCategories,
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
* createPost CreatePost 
* returns post
* */
const createPost = ({ createPost }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createPost,
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
const createPostReaction = ({ id }) => new Promise(
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
* createPostReply CreatePostReply 
* returns post
* */
const createPostReplyByUser = ({ createPostReply }) => new Promise(
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
*
* id String 
* no response value expected for this operation
* */
const createPostReplyReaction = ({ id }) => new Promise(
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
* create a therapist reputation
*
* therapistReputationRequest TherapistReputationRequest 
* no response value expected for this operation
* */
const createTherapistReputation = ({ therapistReputationRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        therapistReputationRequest,
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
* create an unverified sub email
*
* createUserEmailRequest CreateUserEmailRequest 
* returns user_email
* */
const createUnverifiedUserSubEmail = ({ createUserEmailRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserEmailRequest,
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
* createUserCinfigRequest CreateUserCinfigRequest 
* no response value expected for this operation
* */
const createUserConfig = ({ createUserCinfigRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserCinfigRequest,
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
* create notification schedule settings of sub email
*
* createUserEmailNotificationSchedulesRequest CreateUserEmailNotificationSchedulesRequest 
* returns List
* */
const createUserEmailNotificationSchedules = ({ createUserEmailNotificationSchedulesRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createUserEmailNotificationSchedulesRequest,
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
* delete sub email
*
* id BigDecimal 
* no response value expected for this operation
* */
const deleteSubEmail = ({ id }) => new Promise(
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
* get appointable therapists
*
* returns List
* */
const getAppointableTherapists = () => new Promise(
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
* get the calendar of my therapist
*
* appointmentType AppointmentType 
* timezone String タイムゾーン (optional)
* startDate String 開始日 (optional)
* endDate String 終了日 (optional)
* returns calendar
* */
const getCalendarOfMyTherapist = ({ appointmentType, timezone, startDate, endDate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        appointmentType,
        timezone,
        startDate,
        endDate,
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
* get company code by noAuth user
*
* verificationToken String 
* returns String
* */
const getCompanyCodeByNoAuthUser = ({ verificationToken }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        verificationToken,
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
* get company configs
*
* returns List
* */
const getCompanyConfigs = () => new Promise(
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
* get company configs by noAuth user
*
* verificationToken String 
* returns List
* */
const getCompanyConfigsByNoAuthUser = ({ verificationToken }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        verificationToken,
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
* companyUniqueKey String  (optional)
* returns company
* */
const getCompanyInfo = ({ companyUniqueKey }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        companyUniqueKey,
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
const getFavoritePostCategories = () => new Promise(
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
* get users plans status
*
* returns user_plan_status
* */
const getLatestUserPlanStatus = () => new Promise(
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
* get appointments by user
*
* returns List
* */
const getMyAppointments = () => new Promise(
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
* returns m_company
* */
const getMyCompanyInfo = () => new Promise(
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
* size Integer  (optional)
* page Integer  (optional)
* returns get_posts_response
* */
const getMyPosts = ({ size, page }) => new Promise(
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
* get therapist user info
*
* returns therapist
* */
const getMyTherapistInfo = () => new Promise(
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
* get therapist with info
*
* returns therapist
* */
const getMyTherapistWithInfo = () => new Promise(
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
* get my user goal
*
* returns user_therapist_goal
* */
const getMyUserGoal = () => new Promise(
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
* get user info
*
* returns user
* */
const getMyUserInfo = () => new Promise(
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
* get noAuth user info
*
* verificationToken String 
* returns no_auth_user_info
* */
const getNoAuthUserInfo = ({ verificationToken }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        verificationToken,
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
const getPostByUser = ({ id }) => new Promise(
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
* size Integer  (optional)
* page Integer  (optional)
* categoryId String  (optional)
* returns get_posts_response
* */
const getPostsByUser = ({ size, page, categoryId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        size,
        page,
        categoryId,
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
* returns Integer
* */
const getPostsCountOfMineThisMonth = () => new Promise(
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
* returns List
* */
const getReputationUnansweredAppointments = () => new Promise(
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
* get selected therapist calendar
*
* therapistId BigDecimal  (optional)
* timezone String タイムゾーン (optional)
* startDate String 開始日 (optional)
* endDate String 終了日 (optional)
* returns calendar
* */
const getSelectedTherapistCalendar = ({ therapistId, timezone, startDate, endDate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        therapistId,
        timezone,
        startDate,
        endDate,
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
* get similar movies by movie id
*
* movie4MeasureId String 動画ID
* returns List
* */
const getSimilarMovies = ({ movie4MeasureId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        movie4MeasureId,
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
* get therapist by user
*
* id String 
* returns therapist
* */
const getTherapistByUser = ({ id }) => new Promise(
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
* get my config
*
* key UserConfigKey 
* returns user_config
* */
const getUserConfig = ({ key }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        key,
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
* get user configs
*
* returns List
* */
const getUserConfigs = () => new Promise(
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
* get notification schedule settings
*
* userEmailId Integer  (optional)
* returns List
* */
const getUserEmailNotificationSchedules = ({ userEmailId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userEmailId,
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
* get user emails
*
* isVerified Boolean  (optional)
* returns List
* */
const getUserEmails = ({ isVerified }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        isVerified,
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
* get user statuses
*
* returns user_status
* */
const getUserStatus = () => new Promise(
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
* get weekly calendar
*
* timezone String タイムゾーン (optional)
* startDate String 開始日 (optional)
* returns Map
* */
const getWeeklyCalendar = ({ timezone, startDate }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        timezone,
        startDate,
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
* resend verification mail
*
* resendingEmailVerificationMailRequest ResendingEmailVerificationMailRequest 
* no response value expected for this operation
* */
const resendVerificationMail = ({ resendingEmailVerificationMailRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        resendingEmailVerificationMailRequest,
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
* switch email and sub email
*
* switchEmailAndSubEmailRequest SwitchEmailAndSubEmailRequest 
* returns switch_email_and_sub_email_response
* */
const switchEmailAndSubEmail = ({ switchEmailAndSubEmailRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        switchEmailAndSubEmailRequest,
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
const undoPostReaction = ({ id }) => new Promise(
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
* id String 
* no response value expected for this operation
* */
const undoPostReplyReaction = ({ id }) => new Promise(
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
* update noAuth user's required info
*
* updateNoAuthUserRequiredInfoRequest UpdateNoAuthUserRequiredInfoRequest 
* no response value expected for this operation
* */
const updateNoAuthUserRequiredInfo = ({ updateNoAuthUserRequiredInfoRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateNoAuthUserRequiredInfoRequest,
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
* update movie of mission
*
* userMissionMovieRequest UserMissionMovieRequest 
* no response value expected for this operation
* */
const updateUserMissionMovie = ({ userMissionMovieRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionMovieRequest,
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
* update user mission notifications
*
* userMissionNotificationRequest UserMissionNotificationRequest 
* no response value expected for this operation
* */
const updateUserMissionNotifications = ({ userMissionNotificationRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userMissionNotificationRequest,
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
* update user's required info
*
* updateUserRequiredInfoRequest UpdateUserRequiredInfoRequest 
* returns user
* */
const updateUserRequiredInfo = ({ updateUserRequiredInfoRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUserRequiredInfoRequest,
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
