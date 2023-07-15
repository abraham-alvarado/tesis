<?php
require_once PROJECT_ROOT_PATH . "/model/Database.php";
require_once PROJECT_ROOT_PATH . "/exceptions/UserExceptions.php";
require_once PROJECT_ROOT_PATH . "/exceptions/AddressExceptions.php";
require_once PROJECT_ROOT_PATH . "/util/sanitize.php";
require_once PROJECT_ROOT_PATH . "/model/AddressModel.php";
class UserModel extends Database
{
    public function getUsers($limit)
    {
        return $this->select("SELECT * FROM usuario_app ORDER BY id_usuario ASC LIMIT ?", ["i", [$limit]]);
    }

    public function getUserById($id)
    {
        return $this->selectOne("SELECT * FROM usuario_app WHERE id_usuario = ?", ["i", [$id]]);
    }

    public function getUserByEmail($correo) {
        return $this->selectOne("SELECT * FROM usuario_app WHERE correo = ?", ["s", [$correo]]);
    }

    public function getUserByCedula($cedula) {
        return $this->selectOne("SELECT * FROM usuario_app WHERE cedula = ?", ["s", [$cedula]]);
    }

    public function createUser(
        $nombre,
        $apellido,
        $celular,
        $cedula,
        $correo,
        $contrasena,
        $codigo
    ) {
        if ($this->getUserByEmail($correo)) {
            throw new EmailInUseException($correo);
        }
        if ($this->getUserByCedula($cedula)) {
            throw new CedulaInUseException($cedula);
        }

        $addressModel = new AddressModel();
        $address = $addressModel->getAddressByCode($codigo);
        if ($address) {
            $uses = $addressModel->getCodeUses($address['id_direccion']);
            if ($uses < $address['intentos_casa']) {
                $id_direccion = $address["id_direccion"];
                $this->executeStatement(
                    "INSERT INTO usuario_app (nombre_usuario, apellido_usuario, celular, cedula, correo, contrasena, direccion) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    ["ssssssi", [$nombre, $apellido, $celular, $cedula, $correo, password_hash($contrasena, PASSWORD_DEFAULT), $id_direccion]]
                );
                $LastID = $this->getLastId();
                return $this->getUserById($LastID);
            } else {
                throw new AddressLimitException($codigo);
            }
        } else {
            throw new AddressNotFoundException($codigo);
        }
    }
}