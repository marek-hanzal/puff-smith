<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Booster\Dto\BoosterFilterDto;
use PuffSmith\Booster\Dto\Create\CreateDto;

class BoosterRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC]);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter BoosterFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_booster.id',
			'z_booster.name',
			'v.name',
		], $filter->fulltext)
			->leftJoin('z_vendor as v', 'v.id', '=', 'z_booster.vendor_id');
		isset($filter->name) && $this->fulltext($select, [
			'name',
		], $filter->name);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'nicotine'  => $createDto->nicotine,
			'volume'    => $createDto->volume,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
