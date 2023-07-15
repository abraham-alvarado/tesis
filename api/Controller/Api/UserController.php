<?php

require_once(__DIR__.'/../../model/UserModel.php');
require_once(__DIR__.'/../../util/sanitize.php');

class UserController extends BaseController
{

    private function userResponse($success, $user) {
        return json_encode(array(
            'data' => array(
                'success' => $success,
                'user' => $user
            ),
            'error' => false,
            'message' => null
        ));
    }

    public function list()
    {
        $errorObj = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $userModel = new UserModel();
                $intLimit = 10;
                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
                    $intLimit = $arrQueryStringParams['limit'];
                }
                $arrUsers = $userModel->getUsers($intLimit);
                $responseData = json_encode($arrUsers);
            } catch (Error $e) {
                $errorObj = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $errorObj = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
        // send output 
        if (!$errorObj) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $errorObj)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    /** 
 {
   "data":{
      "success":true,
      "user":{
         "address":"address",
         "email":"a@a.com",
         "id":1,
         "lastName":"tut",
         "name":"ruth",
         "phone":"phone",
         "role":"role",
         "token":"token",
         "username":"root"
      }
   },
   "error":null,
   "message":null
}
     **/

    public function loginAction() {
        $errorObj = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        if (strtoupper($requestMethod) == 'POST') {
            $body = $this->getRequestBody();
            try {
                $userModel = new UserModel();
                // Get username and password
                $username = $body['username'];
                $password = $body['password'];
                // echo password_hash($password, PASSWORD_DEFAULT);
                $userObj = $userModel->getUserByEmail($username);
                if ($userObj) {
                    // var_dump($userObj);  
                    if (password_verify($password, $userObj["contrasena"])) {
                        $responseData = json_encode(array(
                            'data' => array(
                                'success' => true,
                                'user' => sanitizeUser($userObj)
                            ),
                            'error' => null,
                            'message' => null
                        ));
                    } else {
                        $responseData = json_encode(array(
                            'data' => array(
                                'success' => false,
                                'user' => null
                            ),
                            'error' => null,
                            'message' => null
                        ));
                    }
                } else {
                    $responseData = json_encode(array(
                        'data' => array(
                            'success' => false,
                            'user' => null
                        ),
                        'error' => null,
                        'message' => null
                    ));
                }

                // $responseData = json_encode($arrUsers);
            } catch (Error $e) {
                $errorObj = $e->getMessage() .'. Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $errorObj = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }

        // send output 
        if (!$errorObj) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $errorObj)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    /**
     * Errores:
     * 1. Correo ya utilizado
     * 2. Cedula ya utilizada
     * 3. Codigo de direccion utilizado mas veces de las permitidas
     */
    function signupAction() {
        $errorObj = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        if (strtoupper($requestMethod) == 'POST') {
            $body = $this->getRequestBody();
            try {
                $userModel = new UserModel();
                // Validar usos del codigo
                // $userObj = $userModel->getUserByEmail($body['correo']);

                try {
                    $user = $userModel->createUser(        
                        $body["nombre"],
                        $body["apellido"],
                        $body["celular"],
                        $body["cedula"],
                        $body["correo"],
                        $body["contrasena"],
                        $body["codigo"]
                    );
                    $responseData = json_encode(array(
                        'data' => array(
                            'success' => true,
                            'user' => sanitizeUser($user)
                        ),
                        'error' => null,
                        'message' => null
                    ));
                } catch (EmailInUseException $e1) {
                    $errorObj = $this->error("Ya existe un usuario con esa dirección de correo electrónico.");
                    $strErrorHeader = 'HTTP/1.1 400 Bad Request';
                } catch (CedulaInUseException $e2) {
                    $errorObj = $this->error("Ya existe un usuario con ese número de cédula.");
                    $strErrorHeader = 'HTTP/1.1 400 Bad Request';
                } catch (AddressNotFoundException $e2) {
                    $errorObj = $this->error("No existe la dirección proporcionada.");
                    $strErrorHeader = 'HTTP/1.1 400 Bad Request';
                } catch (AddressLimitException $e2) {
                    $errorObj = $this->error("El código de validación fue utilizado demasiadas veces.");
                    $strErrorHeader = 'HTTP/1.1 400 Bad Request';
                } catch (Exception $e3) {
                    $errorObj = $this->error($e3->getMessage().". Error desconocido.");
                    $strErrorHeader = 'HTTP/1.1 400 Bad Request';
                }
            } catch (Error $e) {
                $errorObj = $this->error($e->getMessage(). ' ('. $e->getFile() . ':' . $e->getLine() .'). Something went wrong! Please contact support.');
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $errorObj = $this->error('Method not supported');
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }

        // send output 
        if (!$errorObj) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput($errorObj, 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

}