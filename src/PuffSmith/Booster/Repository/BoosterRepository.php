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

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'pg'        => $createDto->pg,
			'vg'        => $createDto->vg,
			'nicotine'  => $createDto->nicotine,
			'volume'    => $createDto->volume,
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
