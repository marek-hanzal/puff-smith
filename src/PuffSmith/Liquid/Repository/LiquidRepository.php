<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Liquid\Dto\Create\CreateDto;
use PuffSmith\Liquid\Dto\LiquidFilterDto;
use PuffSmith\Liquid\Dto\Patch\PatchDto;

class LiquidRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['$_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter LiquidFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'v.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);
		isset($filter->vendorIds) && $this->where($select, '$.vendor_id', 'in', $filter->vendorIds);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'pg'          => $createDto->pg,
			'vg'          => $createDto->vg,
			'volume'      => $createDto->volume,
			'description' => $createDto->description,
			'vendor_id'   => $createDto->vendorId,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'          => $patchDto->id,
			'name'        => $patchDto->name,
			'pg'          => $patchDto->pg,
			'vg'          => $patchDto->vg,
			'volume'      => $patchDto->volume,
			'description' => $patchDto->description,
			'vendor_id'   => $patchDto->vendorId,
		]);
	}
}
