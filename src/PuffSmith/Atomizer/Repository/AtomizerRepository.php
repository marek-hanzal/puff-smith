<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Atomizer\Dto\AtomizerFilterDto;
use PuffSmith\Atomizer\Dto\CreateDto;
use PuffSmith\Atomizer\Dto\PatchDto;

class AtomizerRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['$_name_unique']);
		$this->orderByMap = [
			'vendor' => 'v.name',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		$this->join($select, 'z_user_atomizer', 'ua', '$.id', 'atomizer_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter AtomizerFilterDto */
		$filter = $query->filter;

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'v.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);
		!empty($filter->vendorIds) && $this->where($select, '$.vendor_id', 'in', $filter->vendorIds);
		isset($filter->userId) && $this->where($select, 'ua.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'        => $patchDto->id,
			'name'      => $patchDto->name,
			'vendor_id' => $patchDto->vendorId,
		]);
	}
}
