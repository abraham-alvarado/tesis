<?php

function sanitizeUser($userObj) {
    unset($userObj["contrasena"]);
    return $userObj;
}

