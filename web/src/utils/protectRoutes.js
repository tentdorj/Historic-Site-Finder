import { jwtDecode } from "jwt-decode";
export const getDecodedToken = () => {
  const decoded = jwtDecode(getToken());
  return decoded;
};
export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
export const isAuth = () => {
  const token = localStorage.getItem("token");
  console.log("status== ", token);

  if (token) {
    return true;
  } else {
    return false;
  }
};
