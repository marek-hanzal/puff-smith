<?php
declare(strict_types=1);

namespace PuffSmith\User\Repository\Atomizer;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\User\Dto\Atomizer\CreateDto;
use PuffSmith\User\Dto\Atomizer\PatchDto;
use PuffSmith\User\Dto\Atomizer\UserAtomizerFilterDto;

class UserAtomizerRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function toQuery(Query $query): Select {
		$select = parent::toQuery($query);

		/** @var $filter UserAtomizerFilterDto */
		$filter = $query->filter;
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'stamp'       => new DateTime(),
			'driptip_id'  => $createDto->driptipId,
			'atomizer_id' => $createDto->atomizerId,
			'user_id'     => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'         => $patchDto->id,
			'driptip_id' => $patchDto->driptipId,
		]);
	}

	public function findByUser(string $atomizerId) {
		return $this->select()->where('user_id', $this->currentUserService->requiredId())->where('atomizer_id', $atomizerId)->execute()->fetch();
	}
}
