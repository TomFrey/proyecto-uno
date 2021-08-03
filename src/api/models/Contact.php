<?php
require __DIR__ .'/../vendor/autoload.php';

class Contact
{
	private $id;
	private $name;
	private $address;
	private $additional;
	private $zip;
    private $city;
    private $phone;
    private $email;
	private $emailText;


	public function __construct($id = false)
	{
		if ($id) {
			$statement = DB::get()->prepare(
				"select k.*" .  
				" from kontakt k" .
				" where k.id = :id"
			);

			$statement->execute([
				':id' => $id
			]);

			$contactData = $statement->fetch(PDO::FETCH_ASSOC);

			$this->setId($contactData['id']);
			$this->setName($contactData['name']);
			$this->setAddress($contactData['address']);
			$this->setAdditional($contactData['additional']);
			$this->setZip($contactData['zip']);
            $this->setCity($contactData['city']);
            $this->setPhone($contactData['phone']);
            $this->setEmail($contactData['email']);
			$this->setEmailText($contactData['email_text']);
		}
	}

	public function getId()
	{
		return $this->id;
	}
	public function setId($id)
	{
		$this->id = $id;
	}


    public function getName()
	{
		return $this->name;
	}
	public function setName($name)
	{
		$this->name = $name;
	}


    public function getAddress()
	{
		return $this->address;
	}
	public function setAddress($address)
	{
		$this->address = $address;
	}


    public function getAdditional()
	{
		return $this->additional;
	}
	public function setAdditional($additional)
	{
		$this->additional = $additional;
	}


    public function getZip()
	{
		return $this->zip;
	}
	public function setZip($zip)
	{
		$this->zip = $zip;
	}


    public function getCity()
	{
		return $this->city;
	}
	public function setCity($city)
	{
		$this->city = $city;
	}


	public function getPhone()
	{
		return $this->phone;
	}
	public function setPhone($phone)
	{
		$this->phone = $phone;
	}


    public function getEmail()
	{
		return $this->email;
	}
	public function setEmail($email)
	{
		$this->email = $email;
	}


	public function getEmailText()
	{
		return $this->emailText;
	}
	public function setEmailText($emailText)
	{
		$this->emailText = $emailText;
	}
}
