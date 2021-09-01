// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = "https://storeuwu.herokuapp.com/api";

const storeApi = axios.create({ baseURL });
storeApi.interceptors.request.use(async (confing) => {
  const token = await  JSON.parse(localStorage.getItem("token"))
  if (token) {
    confing.headers["x-token"] = token;
  }
  return confing;
});

export default storeApi;
