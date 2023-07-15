import User from "../models/user";
import LoginResult from "../models/http/LoginResult";

function payload(data, error = null, message = null) {
  return {
    error,
    message,
    data,
  };
}

function mockLogin(username, password) {
  return payload(
    new LoginResult(
      true,
      new User(
        1,
        "root",
        "ruth",
        "tut",
        username,
        "phone",
        "address",
        "role",
        "token"
      )
    )
  );
}

function mockValidateCode(code) {
  return payload({
    success: true,
    uses: 0,
    address: {
      id_direccion: 2,
      manzana: "e",
      villa: 2,
      codigo_activacion: "abc",
      intentos_casa: 4,
    },
  });
}

export { mockLogin };
