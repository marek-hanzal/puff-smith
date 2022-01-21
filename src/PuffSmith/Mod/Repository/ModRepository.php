<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Mod\Dto\Create\CreateDto;

class ModRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_mod_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
