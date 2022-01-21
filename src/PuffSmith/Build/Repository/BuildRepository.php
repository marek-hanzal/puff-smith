<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Build\Dto\Create\CreateDto;
use function microtime;

class BuildRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['created' => IRepository::ORDER_DESC], ['z_build_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'atomizer_id' => $createDto->atomizerId,
			'coil_id'     => $createDto->coilId,
			'cotton_id'   => $createDto->cottonId,
			'coils'       => $createDto->coils,
			'coil'        => $createDto->coil,
			'cotton'      => $createDto->cotton,
			'ohm'         => $createDto->ohm,
			'created'     => microtime(true),
			'user_id'     => $createDto->userId,
		]);
	}
}
