<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Booster\Dto\Create\CreateDto;

class BoosterRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'nicotine'  => $createDto->nicotine,
			'volume'    => $createDto->volume,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
