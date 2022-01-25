<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Build\Dto\BuildFilterDto;
use PuffSmith\Build\Dto\Create\CreateDto;
use PuffSmith\Build\Dto\Patch\PatchDto;
use function microtime;

class BuildRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['created' => IRepository::ORDER_DESC], ['z_build_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter BuildFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_build.id',
			'z_build.name',
			'a.name',
			'w.name',
		], $filter->fulltext)
			->leftJoin('z_atomizer as a', 'a.id', '=', 'z_build.atomizer_id')
			->leftJoin('z_coil as c', 'c.id', '=', 'z_build.coil_id')
			->leftJoin('z_wire as w', 'w.id', '=', 'c.wire_id');
		isset($filter->name) && $this->fulltext($select, [
			'name',
		], $filter->name);
		isset($filter->userId) && $select->where('z_build.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
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
