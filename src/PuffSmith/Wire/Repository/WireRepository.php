<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Wire\Dto\Create\CreateDto;

class WireRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_wire_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'ga'          => $createDto->ga,
			'vendor_id'   => $createDto->vendorId,
		]);
	}
}
