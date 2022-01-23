<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Liquid\Dto\Create\CreateDto;
use PuffSmith\Liquid\Dto\LiquidFilterDto;

class LiquidRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_liquid_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter LiquidFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_liquid.id',
			'z_liquid.name',
			'v.name',
		], $filter->fulltext)
			->leftJoin('z_vendor as v', 'v.id', '=', 'z_liquid.vendor_id');
		isset($filter->name) && $this->fulltext($select, [
			'name',
		], $filter->name);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'pg'          => $createDto->pg,
			'vg'          => $createDto->vg,
			'description' => $createDto->description,
			'vendor_id'   => $createDto->vendorId,
		]);
	}
}
