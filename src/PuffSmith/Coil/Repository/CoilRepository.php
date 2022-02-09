<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Coil\Dto\CoilFilterDto;
use PuffSmith\Coil\Dto\CreateDto;
use PuffSmith\Coil\Dto\PatchDto;

class CoilRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct([
			'wire' => IRepository::ORDER_DESC,
			'ga'   => IRepository::ORDER_ASC,
		], ['$_coil_unique']);
		$this->orderByMap = [
			'wire'        => 'w.name',
			'ga'          => 'w.ga',
			'description' => 'w.description',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_wire', 'w', '$.wire_id');
		$this->join($select, 'z_vendor', 'v', 'w.vendor_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CoilFilterDto */
		$filter = $query->filter;

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'w.name',
			'w.ga',
			'w.description',
			'v.name',
		], $filter->fulltext);
		isset($filter->wireIds) && $this->where($select, '$.wire_id', 'in', $filter->wireIds);
		{
			isset($filter->wraps) &&
			$filter->wraps[0] > 0 &&
			$filter->wraps[0] > 0 &&
			$this->where($select, '$.wraps', '>=', $filter->wraps[0]) &&
			$this->where($select, '$.wraps', '<=', $filter->wraps[1]);
		}

		$select->distinct();

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'stamp'   => new DateTime(),
			'wraps'   => $createDto->wraps,
			'spaced'  => $createDto->spaced,
			'size'    => $createDto->size,
			'wire_id' => $createDto->wireId,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'     => $patchDto->id,
			'wraps'  => $patchDto->wraps,
			'spaced' => $patchDto->spaced,
			'size'   => $patchDto->size,
		]);
	}

	public function findByCreate(CreateDto $createDto) {
		return $this->select()
			->where('wraps', $createDto->wraps)
			->where('size', $createDto->size)
			->where('wire_id', $createDto->wireId)
			->execute()
			->fetch();
	}
}
