<?php

require_once __DIR__ . '/AppException.php';


class AddressNotFoundException extends AppException
{
    public $codigo;
    public function __construct($id, $message = "La dirección no existe")
    {
        $this->codigo = $codigo;
        parent::__construct(ErrorCode::ADDRESS_NOT_FOUND,$message);
    }
}

class AddressLimitException extends AppException
{
    public $codigo;
    public function __construct($codigo, $message = "Este código fue utilizado demasiadas veces.")
    {
        $this->codigo = $codigo;
        parent::__construct(ErrorCode::ACTIVATION_CODE_MAX_USES, $message);
    }
}