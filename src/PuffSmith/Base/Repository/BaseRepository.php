<?php
declare(strict_types=1);

namespace PuffSmith\Base\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Base\Dto\Create\CreateDto;

class BaseRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'pg'        => $createDto->pg,
			'vg'        => $createDto->vg,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
