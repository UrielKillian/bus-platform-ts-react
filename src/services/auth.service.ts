import { LoginI } from "../interfaces/models/login.interface";
import http from "./http-common";

class AuthService {
  login(data: LoginI) {
    return http.post("/auth/login", data).then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
  }
  profile() {
    return http.get("/auth/profile");
  }

  logout() {
    localStorage.removeItem("user");
  }
}

const authService = new AuthService();

export default authService;
