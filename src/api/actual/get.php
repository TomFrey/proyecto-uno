<?php
session_start();
ini_set("display_errors",true);   //Fehlermeldungen einschalten
require __DIR__ .'/../vendor/autoload.php';

$responseData = Array();


/**
 * Liefert ein Array mit den Daten der Seite 'Aktuell'.
 *
 * @return array
 */
function getActualData(){
	$stmtActual = DB::get()->prepare(
		"SELECT id FROM aktuell"
	);
	$stmtActual->execute();

	$actual = [];
	foreach($stmtActual->fetchAll(PDO::FETCH_ASSOC) as $act){
		$actual[] = new Actual($act['id']);
	}
	return $actual;
}


/**
 * Liefert alle Daten der Seite 'Aktuell'.
 *
 * GET: api/actual.php
 */
foreach(getActualData() as $actual){
    $row = Array();
    $row['id'] = $actual->getId();
    $row['isValid'] = $actual->getIsValid();
    $row['headlineTitle'] = $actual->getHeadlineTitle();
    $row['headlineText'] = $actual->getHeadlineText();
    $row['vernissageTitle'] = $actual->getVernissageTitle();
    $row['vernissageText'] = $actual->getVernissageText();
    $row['address'] = $actual->getAddress();
    $row['openingHours'] = $actual->getOpeningHours();

    array_push($responseData, $row);
}

header("Content-type:application/json", true, 200);
echo json_encode($responseData);
