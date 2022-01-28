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

class BuildRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['created' => IRepository::ORDER_DESC], ['$_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter BuildFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_atomizer', 'a', '$.atomizer_id');
			$this->join($select, 'z_coil', 'c', '$.coil_id');
			$this->join($select, 'z_wire', 'w', 'c.wire_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'a.name',
			'w.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);
		isset($filter->active) && $select->where($this->col('$.active'), $filter->active);
		isset($filter->userId) && $select->where($this->col('$.user_id'), $filter->userId);

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
			'active'       => true,
			'created'      => new DateTime($createDto->created ?? 'now'),
			'user_id'      => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->patch([
			'id'           => $patchDto->id,
			'name'         => $patchDto->name,
			'created'      => $patchDto->created ? new DateTime($patchDto->created) : null,
			'description'  => $patchDto->description,
			'active'       => $patchDto->active,
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
