import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  responseType: "json",
});

export const getusers = async () => {
  let response = [];
  await Api.get("/users")
    .then((res) => (response = res.data))
    .catch((err) => console.log(err));
  return response;
};
