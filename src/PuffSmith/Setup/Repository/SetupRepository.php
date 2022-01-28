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
use PuffSmith\Setup\Dto\Patch\PatchDto;
use PuffSmith\Setup\Dto\SetupFilterDto;

class SetupRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct([
			'created' => IRepository::ORDER_DESC,
			'name'    => IRepository::ORDER_ASC,
		], ['$_name_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter SetupFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_mod', 'm', '$.mod_id');
			$this->join($select, 'z_build', 'b', '$.build_id');
			$this->join($select, 'z_atomizer', 'a', 'b.atomizer_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'm.name',
			'b.name',
			'a.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, ['$.name'], $filter->name);
		isset($filter->atomizerId) && $this->where($select, 'b.atomizer_id', $filter->atomizerId);
		isset($filter->modId) && $this->where($select, '$.mod_id', $filter->modId);
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);

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

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'          => $patchDto->id,
			'name'        => $patchDto->name,
			'description' => $patchDto->description,
			'build_id'    => $patchDto->buildId,
			'mod_id'      => $patchDto->modId,
		]);
	}
}
