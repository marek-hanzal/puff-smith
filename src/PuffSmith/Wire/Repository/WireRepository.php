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
		parent::__construct([
			'name' => IRepository::ORDER_ASC,
			'ga'   => IRepository::ORDER_ASC,
		], ['$_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter WireFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'$.description',
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
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'ga'          => $createDto->ga,
			'vendor_id'   => $createDto->vendorId,
		]);
	}
}
