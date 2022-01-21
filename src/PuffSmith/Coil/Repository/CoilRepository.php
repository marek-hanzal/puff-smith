<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Coil\Dto\Create\CreateDto;

class CoilRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['code' => IRepository::ORDER_ASC], ['z_coil_code_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'wraps'   => $createDto->wraps,
			'ohm'     => $createDto->ohm,
			'code'    => $createDto->code,
			'wire_id' => $createDto->wireId,
			'user_id' => $createDto->userId,
		]);
	}
}
