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
		parent::__construct(['code' => IRepository::ORDER_ASC], ['z_coil_code_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CoilFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_coil.id',
			'z_coil.code',
			'w.name',
			'w.description',
		], $filter->fulltext)
			->leftJoin('z_wire as w', 'w.id', '=', 'z_coil.wire_id');

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
