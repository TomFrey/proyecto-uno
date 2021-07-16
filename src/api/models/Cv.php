<?php
require __DIR__ .'/../vendor/autoload.php';

class Cv
{
	private $id;
	private $category;
	private $year;
	private $description;
	private $orderNumber;


	public function __construct($id = false)
	{
		if ($id) {
			$statement = DB::get()->prepare(
				"select c.*" .  
				" from cv c" .
				" where c.id = :id"
			);

			$statement->execute([
				':id' => $id
			]);

			$cvData = $statement->fetch(PDO::FETCH_ASSOC);

			$this->setId($cvData['id']);
			$this->setCategory($cvData['category']);
			$this->setYear($cvData['year']);
			$this->setDescription($cvData['description']);
			$this->setOrderNumber($cvData['orderNumber']);
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


    public function getCategory()
	{
		return $this->category;
	}
	public function setCategory($category)
	{
		$this->category = $category;
	}


    public function getYear()
	{
		return $this->year;
	}
	public function setYear($year)
	{
		$this->year = $year;
	}


    public function getDescription()
	{
		return $this->description;
	}
	public function setDescription($description)
	{
		$this->description = $description;
	}


    public function getOrderNumber()
	{
		return $this->oderNumber;
	}
	public function setOrderNumber($oderNumber)
	{
		$this->oderNumber = $oderNumber;
	}
}
