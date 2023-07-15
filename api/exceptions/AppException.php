<?php

enum ErrorCode {
    case EMAIL_IN_USE;
    case CEDULA_IN_USE;
    case ACTIVATION_CODE_MAX_USES;
    case ADDRESS_NOT_FOUND;
}

class AppException extends Exception
{

    private ErrorCode $errorCode;

    public function __construct(ErrorCode $errorCode, $message, $code = 0, Exception $previous = null)
    {
        $this->errorCode = $errorCode;
        parent::__construct($message, $code, $previous);
    }

    public function __toString()
    {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }

    public function getErrorCode()
    {
        return $this->errorCode;
    }
}