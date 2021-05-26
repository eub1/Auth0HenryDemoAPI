
const getPublicRecruitment = () => {
    return {
      message: "Please log in to see my contact info! The authorization and authentication was built using Auth0.",
    };
};
  
const getProtectedRecruitment = () => {
    return {
        message: {
            LinkedIn: 'https://www.linkedin.com/in/pia-cherni/',
            GitHub: 'https://github.com/piacz',
            Mail: 'piaczernyk@gmail.com',
            pic: 'https://media-exp1.licdn.com/dms/image/C5603AQHpSZy2XDCuKg/profile-displayphoto-shrink_800_800/0/1617713222891?e=1627516800&v=beta&t=aFzROE5H-x2BGa6FMyeVPme_2dvhU3OgOJz_gbGKmSY'
        },
    };
};
  
module.exports = {
    getPublicRecruitment,
    getProtectedRecruitment,
};