import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-c708e.cloudfunctions.net/api",
  //"http://localhost:5001/fir-c708e/us-central1/api",
  // "", //THE API (cloud function) URL
});

export default instance;
