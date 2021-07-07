<?php
ini_set("display_errors",true);   //Fehlermeldungen einschalten
require __DIR__ .'/vendor/autoload.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
	case 'GET':
		include_once "pictures/get.php";
		break;

	case 'POST':
		// nicht implementiert
		break;

	case 'DELETE':
		// nicht implementiert
		break;

	case 'PUT':
		// nicht implementiert
		break;
}
