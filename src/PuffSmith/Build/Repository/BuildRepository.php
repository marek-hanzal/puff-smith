<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Build\Dto\Create\CreateDto;
use function microtime;

class BuildRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['created' => IRepository::ORDER_DESC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'atomizer_id' => $createDto->atomizerId,
			'coil_id'     => $createDto->coilId,
			'cotton_id'   => $createDto->cottonId,
			'coils'       => $createDto->coils,
			'coil'        => $createDto->coil,
			'cotton'      => $createDto->cotton,
			'ohm'         => $createDto->ohm,
			'description' => $createDto->description,
			'created'     => microtime(true),
			'user_id'     => $createDto->userId,
		]);
	}
}
