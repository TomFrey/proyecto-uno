<?php
require __DIR__ .'/../vendor/autoload.php';

class Actual
{
	private $id;
	private $isValid;
	private $headlineTitle;
	private $headlineText;
	private $vernissageTitle;
    private $vernissageText;
	private $vernissageTitle1;
    private $vernissageText1;
	private $vernissageTitle2;
    private $vernissageText2;
    private $address;
    private $openingHours;


	public function __construct($id = false)
	{
		if ($id) {
			$statement = DB::get()->prepare(
				"select a.*" .  
				" from aktuell a" .
				" where a.id = :id"
			);

			$statement->execute([
				':id' => $id
			]);

			$actualData = $statement->fetch(PDO::FETCH_ASSOC);

			$this->setId($actualData['id']);
			$this->setIsValid($actualData['isValid']);
			$this->setHeadlineTitle($actualData['headline_title']);
			$this->setHeadlineText($actualData['headline_text']);
			$this->setVernissageTitle($actualData['vernissage_title']);
            $this->setVernissageText($actualData['vernissage_text']);
			$this->setVernissageTitle1($actualData['vernissage_title_1']);
            $this->setVernissageText1($actualData['vernissage_text_1']);
			$this->setVernissageTitle2($actualData['vernissage_title_2']);
            $this->setVernissageText2($actualData['vernissage_text_2']);
            $this->setAddress($actualData['address']);
            $this->setOpeningHours($actualData['openingHours']);
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


    public function getIsValid()
	{
		return $this->isValid;
	}
	public function setIsValid($isValid)
	{
		$this->isValid = $isValid;
	}


    public function getHeadlineTitle()
	{
		return $this->headlineTitle;
	}
	public function setHeadlineTitle($headlineTitle)
	{
		$this->headlineTitle = $headlineTitle;
	}


    public function getHeadlineText()
	{
		return $this->headlineText;
	}
	public function setHeadlineText($headlineText)
	{
		$this->headlineText = $headlineText;
	}


    public function getVernissageTitle()
	{
		return $this->vernissageTitle;
	}
	public function setVernissageTitle($vernissageTitle)
	{
		$this->vernissageTitle = $vernissageTitle;
	}


    public function getVernissageText()
	{
		return $this->vernissageText;
	}
	public function setVernissageText($vernissageText)
	{
		$this->vernissageText = $vernissageText;
	}


	public function getVernissageTitle1()
	{
		return $this->vernissageTitle1;
	}
	public function setVernissageTitle1($vernissageTitle1)
	{
		$this->vernissageTitle1 = $vernissageTitle1;
	}


    public function getVernissageText1()
	{
		return $this->vernissageText1;
	}
	public function setVernissageText1($vernissageText1)
	{
		$this->vernissageText1 = $vernissageText1;
	}


	public function getVernissageTitle2()
	{
		return $this->vernissageTitle2;
	}
	public function setVernissageTitle2($vernissageTitle2)
	{
		$this->vernissageTitle2 = $vernissageTitle2;
	}


    public function getVernissageText2()
	{
		return $this->vernissageText2;
	}
	public function setVernissageText2($vernissageText2)
	{
		$this->vernissageText2 = $vernissageText2;
	}


	public function getAddress()
	{
		return $this->address;
	}
	public function setAddress($address)
	{
		$this->address = $address;
	}


    public function getOpeningHours()
	{
		return $this->openingHours;
	}
	public function setOpeningHours($openingHours)
	{
		$this->openingHours = $openingHours;
	}
}
