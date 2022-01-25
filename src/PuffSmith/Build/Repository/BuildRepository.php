<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use DateTime;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Build\Dto\Create\CreateDto;
use PuffSmith\Build\Dto\Patch\PatchDto;
use function microtime;

class BuildRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['created' => IRepository::ORDER_DESC], ['z_build_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'         => $createDto->name,
			'description'  => $createDto->description,
			'atomizer_id'  => $createDto->atomizerId,
			'coil_id'      => $createDto->coilId,
			'cotton_id'    => $createDto->cottonId,
			'coils'        => $createDto->coils,
			'coilOffset'   => $createDto->coilOffset,
			'cottonOffset' => $createDto->cottonOffset,
			'ohm'          => $createDto->ohm,
			'created'      => $createDto->created ? (new DateTime($createDto->created))->getTimestamp() : microtime(true),
			'user_id'      => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->patch([
			'id'           => $patchDto->id,
			'name'         => $patchDto->name,
			'created'      => $patchDto->created ? (new DateTime($patchDto->created))->getTimestamp() : null,
			'description'  => $patchDto->description,
			'atomizer_id'  => $patchDto->atomizerId,
			'coil_id'      => $patchDto->coilId,
			'cotton_id'    => $patchDto->cottonId,
			'coils'        => $patchDto->coils,
			'coilOffset'   => $patchDto->coilOffset,
			'cottonOffset' => $patchDto->cottonOffset,
			'ohm'          => $patchDto->ohm,
		]);
	}
}
