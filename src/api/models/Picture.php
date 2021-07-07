<?php
require __DIR__ .'/../vendor/autoload.php';

class Picture
{
	private $id;
	private $path;
	private $name;
	private $title;
	private $description;


	public function __construct($id = false)
	{
		if ($id) {
			// Das select holt das Bild mit der entsprechenden $id
			$statement = DB::get()->prepare(
				"select p.*" .  
				" from picture p" .
				" where p.id = :id"
			);

			$statement->execute([
				':id' => $id
			]);

			$pic = $statement->fetch(PDO::FETCH_ASSOC);

			$this->setId($pic['id']);
			$this->setPath($pic['path']);
			$this->setName($pic['name']);
			$this->setTitle($pic['title']);
			$this->setDescription($pic['description']);
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


    public function getPath()
	{
		return $this->path;
	}
	public function setPath($path)
	{
		$this->path = $path;
	}


	public function getName()
	{
		return $this->name;
	}
	public function setName($name)
	{
		$this->name = $name;
	}


    public function getTitle()
	{
		return $this->title;
	}
	public function setTitle($title)
	{
		$this->title = $title;
	}


	public function getDescription()
	{
		return $this->description;
	}
	public function setDescription($description)
	{
		$this->description = $description;
	}
}
