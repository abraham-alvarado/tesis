import { mockLogin } from "./mockHttpService";

const API_URL = "http://192.168.3.8/api";

async function login(username, password) {
  let result = await post(API_URL + "/user/login", {
    username,
    password,
  });
  var data = await result.json();
  return data;
  // return mockLogin(username, password)
}

async function validateCode(code) {
  let result = await post(API_URL + "/address/validate", {
    code,
  });
  // console.log(await result.text());
  var data = await result.json();
  return data;
  // return mockValidateCode(username, password)
}

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export { login, validateCode };


