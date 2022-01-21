<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Atomizer\Dto\AtomizerFilterDto;
use PuffSmith\Atomizer\Dto\Create\CreateDto;

class AtomizerRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_atomizer_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter AtomizerFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_atomizer.id',
			'z_atomizer.name',
			'v.name',
		], $filter->fulltext)
			->leftJoin('z_vendor as v', 'v.id', '=', 'z_atomizer.vendor_id');
		isset($filter->name) && $this->fulltext($select, [
			'name',
		], $filter->name);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
