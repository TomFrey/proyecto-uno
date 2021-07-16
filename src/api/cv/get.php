<?php
session_start();
ini_set("display_errors",true);   //Fehlermeldungen einschalten
require __DIR__ .'/../vendor/autoload.php';

$responseData = Array();


/**
 * Liefert ein Array mit den Daten der Seite 'CV'.
 *
 * @return array
 */
function getCvData(){
	$stmtCv = DB::get()->prepare(
		"SELECT id FROM cv ORDER BY category, orderNumber ASC"
	);
	$stmtCv->execute();

	$cvArray = [];
	foreach($stmtCv->fetchAll(PDO::FETCH_ASSOC) as $cv){
		$cvArray[] = new Cv($cv['id']);
	}
	return $cvArray;
}


/**
 * Liefert alle Daten der Seite 'CV'.
 *
 * GET: api/cv.php
 */
foreach(getCvData() as $cv){
    $row = Array();
    $row['id'] = $cv->getId();
    $row['category'] = $cv->getCategory();
    $row['year'] = $cv->getYear();
    $row['description'] = $cv->getDescription();
    $row['orderNumber'] = $cv->getOrderNumber();

    array_push($responseData, $row);
}

header("Content-type:application/json", true, 200);
echo json_encode($responseData);
