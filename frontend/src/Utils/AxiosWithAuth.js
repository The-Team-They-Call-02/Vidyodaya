import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
const AxiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    baseURL: "",
  });
};
export default AxiosWithAuth;