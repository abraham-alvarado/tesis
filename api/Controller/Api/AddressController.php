<?php
require_once(__DIR__.'/../../model/AddressModel.php');

class AddressController extends BaseController
{

    private function addressResponse($success, $uses, $address) {
        return json_encode(array(
            'data' => array(
                'success' => $success,
                'uses' => $uses,
                'address' => $address
            ),
            'error' => false,
            'message' => null
        ));
    }

    public function validateAction() {
        $errorObj = null;
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'POST') {
            try {
                $body = $this->getRequestBody();
                $addressModel = new AddressModel();
                // Ver si el codigo existe
                // Si existe el codigo, ver si tiene intentos disponibles
                if (!isset($body['code']) || !($address = $addressModel->getAddressByCode($body['code']))) {
                    $responseData = $this->addressResponse(false, 0, null);
                } else {
                    $uses = $addressModel->getCodeUses($address['id_direccion']);
                    if ($uses < $address['intentos_casa']) {
                        $responseData = $this->addressResponse(true, $uses, $address);
                    } else {
                        $responseData = $this->addressResponse(false, $uses, $address);
                    }
                }

            } catch (Error $e) {
                $errorObj = $this->error($e->getMessage().'. Something went wrong! Please contact support.');
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $errorObj = $this->error('Method not supported');
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
        // var_dump($errorObj);
        // send output 
        if (!$errorObj) {
            $this->sendOutput($responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput($errorObj, 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

}