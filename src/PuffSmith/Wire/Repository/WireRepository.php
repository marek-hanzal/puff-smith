<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Wire\Dto\Create\CreateDto;
use PuffSmith\Wire\Dto\WireFilterDto;

class WireRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_wire_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter WireFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_wire.id',
			'z_wire.name',
			'v.name',
			'v.description',
		], $filter->fulltext)
			->leftJoin('z_vendor as v', 'v.id', '=', 'z_wire.vendor_id');
		isset($filter->name) && $this->fulltext($select, [
			'name',
		], $filter->name);

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
}
