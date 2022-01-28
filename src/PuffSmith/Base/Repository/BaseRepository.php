<?php
declare(strict_types=1);

namespace PuffSmith\Base\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Base\Dto\BaseFilterDto;
use PuffSmith\Base\Dto\Create\CreateDto;

class BaseRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC]);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter BaseFilterDto */
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
			'vendor_id' => $createDto->vendorId,
		]);
	}
}
