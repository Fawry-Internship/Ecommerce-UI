export const saveToken = (token: String) => {
  sessionStorage.setItem('userToken', String(token));
};

export const getToken = () => {
  return sessionStorage.getItem('userToken');
};

export const logOut = () => {
  sessionStorage.clear();
};

export const usersHost = () => {
  return 'http://localhost:9091/users';
};

export const couponHost = () => {
  return 'http://localhost:9090/coupon';
};
