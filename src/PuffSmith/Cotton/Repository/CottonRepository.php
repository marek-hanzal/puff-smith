<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Cotton\Dto\Create\CreateDto;

class CottonRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_cotton_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'vendor_id'   => $createDto->vendorId,
		]);
	}
}
