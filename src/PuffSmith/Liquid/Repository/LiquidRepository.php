<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Liquid\Dto\Create\CreateDto;

class LiquidRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_liquid_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'pg'          => $createDto->pg,
			'vg'          => $createDto->vg,
			'description' => $createDto->description,
			'vendor_id'   => $createDto->vendorId,
		]);
	}
}
