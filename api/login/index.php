<?php
header("Content-Type: application/json");

try {
    $body = $request->all();

    $usuario = $body["usuario"];
    $contrasena = $body["contrasena"];

    $objUsuario = getUsuarioFromDB($usuario);

    if ($objUsuario && $contrasena && password_verify($contrasena, $objUsuario["contrasena"])) {

        $objUsuario = sanitizar($objUsuario);

        return array(
            "datos" => $objUsuario,
            "error" => false,
            "mensaje" => "Login exitoso"
        );
    } else {
        return array(
            "datos" => null,
            "error" => true,
            "mensaje" => "Usuario o contraseña incorrectos"
        );
    }
} catch (Exception $e) {
    echo $e->getMessage();
}

?>