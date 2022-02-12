<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Mod\Dto\CreateDto;
use PuffSmith\Mod\Dto\ModFilterDto;
use PuffSmith\Mod\Dto\PatchDto;

class ModRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['$_name_unique']);
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

		/** @var $filter ModFilterDto */
		$filter = $query->filter;

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'v.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'power'     => $createDto->power,
			'vendor_id' => $createDto->vendorId,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'        => $patchDto->id,
			'name'      => $patchDto->name,
			'power'     => $patchDto->power,
			'vendor_id' => $patchDto->vendorId,
		]);
	}
}
