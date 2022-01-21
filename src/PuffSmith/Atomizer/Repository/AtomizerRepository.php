<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Atomizer\Dto\Create\CreateDto;

class AtomizerRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_atomizer_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
