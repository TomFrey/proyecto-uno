<?php
session_start();
ini_set("display_errors",true);   //Fehlermeldungen einschalten
require __DIR__ .'/../vendor/autoload.php';

$responseData = Array();


/**
 * Liefert ein Array mit allen Bildern.
 *
 * @return array
 */
function getAllPictures(){
	$stmtPics = DB::get()->prepare(
		"SELECT id FROM picture"
	);
	$stmtPics->execute();

	$pics = [];
	foreach($stmtPics->fetchAll(PDO::FETCH_ASSOC) as $pic){
		$pics[] = new Picture($pic['id']);
	}
	return $pics;
}


/**
 * Liefert alle Bilder.
 *
 * GET: api/picture.php
 */
foreach(getAllPictures() as $pic){
    $row = Array();
    $row['id'] = $pic->getId();
    $row['path'] = $pic->getPath();
    $row['name'] = $pic->getName();
    $row['title'] = $pic->getTitle();
    $row['description'] = $pic->getDescription();

    array_push($responseData, $row);
}

header("Content-type:application/json", true, 200);
echo json_encode($responseData);

