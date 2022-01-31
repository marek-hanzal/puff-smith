<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Coil\Dto\CoilFilterDto;
use PuffSmith\Coil\Dto\Create\CreateDto;
use PuffSmith\Coil\Dto\Patch\PatchDto;

class CoilRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC], ['$_coil_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CoilFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_wire', 'w', '$.wire_id');
			$this->join($select, 'z_vendor', 'v', 'w.vendor_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'w.name',
			'w.description',
			'v.name',
		], $filter->fulltext);
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);
		isset($filter->wireIds) && $this->where($select, '$.wire_id', 'in', $filter->wireIds);
		{
			isset($filter->wraps) &&
			$filter->wraps[0] > 0 &&
			$filter->wraps[0] > 0 &&
			$this->where($select, '$.wraps', '>=', $filter->wraps[0]) &&
			$this->where($select, '$.wraps', '<=', $filter->wraps[1]);
		}
		{
			isset($filter->ohm) &&
			$filter->ohm[0] > 0 &&
			$filter->ohm[0] > 0 &&
			$this->where($select, '$.ohm', '>=', $filter->ohm[0]) &&
			$this->where($select, '$.ohm', '<=', $filter->ohm[1]);
		}

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'stamp'   => new DateTime(),
			'wraps'   => $createDto->wraps,
			'ohm'     => $createDto->ohm,
			'wire_id' => $createDto->wireId,
			'user_id' => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'      => $patchDto->id,
			'wraps'   => $patchDto->wraps,
			'ohm'     => $patchDto->ohm,
			'wire_id' => $patchDto->wireId,
		]);
	}
}
