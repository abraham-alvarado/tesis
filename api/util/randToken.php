<?php

// Para sesiones
function randomToken() {
    $token = '';
    $codeAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $codeAlphabet.= 'abcdefghijklmnopqrstuvwxyz';
    $codeAlphabet.= '0123456789';
    $max = strlen($codeAlphabet); // edited

    for ($i=0; $i < 32; $i++) {
        $token .= $codeAlphabet[random_int(0, $max-1)];
    }

    return $token;
}


// Para direcciones
function randomCode() {
    $token = '';
    $codeAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $codeAlphabet.= '0123456789';
    $max = strlen($codeAlphabet); // edited

    for ($i=0; $i < 8; $i++) {
        $token .= $codeAlphabet[random_int(0, $max-1)];
    }

    return $token;
}

