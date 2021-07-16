<?php
session_start();
ini_set("display_errors",true);   //Fehlermeldungen einschalten
require __DIR__ .'/../vendor/autoload.php';

$responseData = Array();


/**
 * Liefert ein Array mit den Daten der Seite 'Kontakt'.
 *
 * @return array
 */
function getContactData(){
	$stmtContact = DB::get()->prepare(
		"SELECT id FROM kontakt"
	);
	$stmtContact->execute();

	$contactArray = [];
	foreach($stmtContact->fetchAll(PDO::FETCH_ASSOC) as $contact){
		$contactArray[] = new Contact($contact['id']);
	}
	return $contactArray;
}


/**
 * Liefert alle Daten der Seite 'Kontakt'.
 *
 * GET: api/contact.php
 */
foreach(getContactData() as $contact){
    $row = Array();
    $row['id'] = $contact->getId();
    $row['name'] = $contact->getName();
    $row['address'] = $contact->getAddress();
    $row['additional'] = $contact->getAdditional();
    $row['zip'] = $contact->getZip();
    $row['city'] = $contact->getCity();
    $row['phone'] = $contact->getPhone();
    $row['email'] = $contact->getEmail();

    array_push($responseData, $row);
}

header("Content-type:application/json", true, 200);
echo json_encode($responseData);
