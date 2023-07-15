<?php
require __DIR__ . "/inc/bootstrap.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

// if ((isset($uri[2]) && $uri[2] != 'user') || !isset($uri[3])) {
//     header("HTTP/1.1 404 Not Found");
//     exit();
// }

if (!isset($uri[2]) || !isset($uri[3])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}

// /api/user/login
// /api/address/validate 

if ($uri[2] == 'user') {
    require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
    $objFeedController = new UserController();
    $strMethodName = $uri[3] . 'Action';
    $objFeedController->{$strMethodName}();
} else if ($uri[2] == 'address') {
    require PROJECT_ROOT_PATH . "/Controller/Api/AddressController.php";
    $objFeedController = new AddressController();
    $strMethodName = $uri[3] . 'Action';
    $objFeedController->{$strMethodName}();
} else {
    header("HTTP/1.1 404 Not Found");
    exit();
}
?>


