import { CreateUserI } from "../interfaces/models/create-user.interface";
import http from "./http-common";

class UsersService {
  getAllUsers() {
    return http.get("/users");
  }
  register(data: CreateUserI) {
    return http.post("/users/create", data);
  }

  getUserByEmail(email: string) {
    return http.get(`/users/email/${email}`);
  }

  // Local Storage
  getActualEmail() {
    let user: any = localStorage.getItem("user");
    user = JSON.parse(user);
    return user.authenticatedUser.email;
  }
}

const usersService = new UsersService();

export default usersService;
