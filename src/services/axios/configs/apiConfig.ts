import axios from "axios";

export const apiRequest = axios.create({
    baseURL: 'https://back-dashboard-iota.vercel.app'
});

apiRequest.interceptors.request.use(
    function (config) {
      config.headers["Content-Type"] = "application/json";
      config.headers.Accept = "application/json";
      return config;
    },
  
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axios.interceptors.response.use(
    function (response) {
      console.log(response);
      return response;
    },
    function (error) {;
      console.log(error , "error");
      return Promise.reject(error);
    }
  );