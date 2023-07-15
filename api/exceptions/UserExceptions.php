<?php

require_once __DIR__ . '/AppException.php';


class EmailInUseException extends AppException
{
    public $correo;
    public function __construct($correo, $message = "El correo ya está en uso")
    {
        $this->correo = $correo;
        parent::__construct(ErrorCode::EMAIL_IN_USE,$message.": ".$correo);
    }
}

class CedulaInUseException extends AppException
{
    public $cedula;
    public function __construct($cedula, $message = "La cédula ya está en uso")
    {
        $this->cedula = $cedula;
        parent::__construct(ErrorCode::CEDULA_IN_USE, $message.": ".$cedula);
    }
}

