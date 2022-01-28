<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Coil\Dto\CoilFilterDto;
use PuffSmith\Coil\Dto\Create\CreateDto;

class CoilRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['code' => IRepository::ORDER_ASC], ['$_code_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CoilFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_wire', 'w', '$.wire_id');
			$this->join($select, 'z_vendor', 'v', 'w.vendor_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.code',
			'w.name',
			'w.description',
			'v.name',
		], $filter->fulltext);
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'wraps'   => $createDto->wraps,
			'ohm'     => $createDto->ohm,
			'code'    => $createDto->code,
			'wire_id' => $createDto->wireId,
			'user_id' => $this->currentUserService->requiredId(),
		]);
	}
}
