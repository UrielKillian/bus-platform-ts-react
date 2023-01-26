import http from "./http-common";

class DepartmentService {
  getAllDepartments() {
    return http.get("/departments");
  }
}

const departmentService = new DepartmentService();

export default departmentService;
