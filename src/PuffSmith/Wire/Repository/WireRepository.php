<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Wire\Dto\CreateDto;
use PuffSmith\Wire\Dto\PatchDto;
use PuffSmith\Wire\Dto\WireFilterDto;

class WireRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct([
			'name' => IRepository::ORDER_ASC,
			'ga'   => IRepository::ORDER_ASC,
		], ['$_name_unique']);
		$this->orderByMap = [
			'vendor' => 'v.name',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter WireFilterDto */
		$filter = $query->filter;

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'$.description',
			'$.ga',
			'v.name',
		], $filter->fulltext);

		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);
		!empty($filter->vendorIds) && $this->where($select, '$.vendor_id', 'in', $filter->vendorIds);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'ga'          => $createDto->ga,
			'vendor_id'   => $createDto->vendorId,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->insert([
			'id'          => $patchDto->id,
			'name'        => $patchDto->name,
			'description' => $patchDto->description,
			'ga'          => $patchDto->ga,
			'vendor_id'   => $patchDto->vendorId,
		]);
	}
}
