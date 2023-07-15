<?php
require_once PROJECT_ROOT_PATH . "/model/Database.php";
require_once PROJECT_ROOT_PATH . "/exceptions/UserExceptions.php";
class AddressModel extends Database
{

    public function getAddressByCode($code) {
        return $this->selectOne("SELECT * FROM direccion_usuario WHERE codigo_activacion = ?", ["s", [$code]]);
    }

    public function getCodeUses($id_direccion) {
        return $this->selectOne("SELECT COUNT(*) AS uses FROM usuario_app WHERE direccion = ?", ["s", [$id_direccion]])["uses"];
    }
    
}