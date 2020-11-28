import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
const AxiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    baseURL: "https://opportunity-hack-vidyodaya.herokuapp.com",
  });
};

export default AxiosWithAuth;
