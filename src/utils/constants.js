export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'


export const USER_AVATAR = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"

export const API_OPTION = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BACK_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/ed3169bc-bae8-4c49-80ed-bab82d071166/CA-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg";


export const SUPPORTED_LANG = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "french", name: "French" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;