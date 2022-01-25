<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Setup\Dto\Create\CreateDto;
use PuffSmith\Setup\Dto\SetupFilterDto;

class SetupRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct([
			'created' => IRepository::ORDER_DESC,
			'name'    => IRepository::ORDER_ASC,
		], ['z_setup_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter SetupFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'id',
		], $filter->fulltext);
		isset($filter->userId) && $select->where('user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'build_id'    => $createDto->buildId,
			'mod_id'      => $createDto->modId,
			'created'     => new DateTime(),
			'user_id'     => $this->currentUserService->requiredId(),
		]);
	}
}
