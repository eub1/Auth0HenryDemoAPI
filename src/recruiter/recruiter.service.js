
const getPublicRecruitment = () => {
    return {
      message: "Please log in to see my contact info! The authorization and authentication was built using Auth0.",
    };
};
  
const getProtectedRecruitment = () => {
    return {
        message: "Me dicen Pipi",
    };
};
  
module.exports = {
    getPublicRecruitment,
    getProtectedRecruitment,
};