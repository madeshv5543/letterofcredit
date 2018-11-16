const ID_TOKEN_KEY = "id_token";
const USER_DATA = "user_data";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token, data) => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
  window.localStorage.setItem(USER_DATA, data);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(USER_DATA);
};

export const getUSer = () => {
   return JSON.parse(window.localStorage.getItem(USER_DATA));
}

export function authHeader() {
    let user = getUSer()
    let token = getToken()
    if(user && token) {
         return { 'x-access-token':  token};
    }else {
        return {};
    }
}

export default { getToken, saveToken, destroyToken, authHeader };