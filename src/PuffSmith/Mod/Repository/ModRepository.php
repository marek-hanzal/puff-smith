<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Mod\Dto\Create\CreateDto;
use PuffSmith\Mod\Dto\ModFilterDto;

class ModRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_mod_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter ModFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_mod.id',
			'z_mod.name',
			'v.name',
		], $filter->fulltext)
			->leftJoin('z_vendor as v', 'v.id', '=', 'z_mod.vendor_id');
		isset($filter->name) && $this->fulltext($select, [
			'name',
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
}
