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
			'z_setup.id',
			'z_setup.name',
			'm.name',
			'b.name',
			'a.name',
		], $filter->fulltext)
			->leftJoin('z_mod as m', 'm.id', '=', 'z_setup.mod_id')
			->leftJoin('z_build as b', 'b.id', '=', 'z_setup.build_id')
			->leftJoin('z_atomizer as a', 'a.id', '=', 'b.atomizer_id');
		isset($filter->name) && $this->fulltext($select, ['name'], $filter->name);
		isset($filter->userId) && $select->where('z_setup.user_id', $filter->userId);

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
