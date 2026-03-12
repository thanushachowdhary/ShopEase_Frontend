import http from "./HttpService";
const login = (email, password) => {
    return http.post("/login", {
        email: email,
        password: password
    });
};
const register = (user) => {
    return http.post("/register", user);
};
export default {
    login,
    register
};