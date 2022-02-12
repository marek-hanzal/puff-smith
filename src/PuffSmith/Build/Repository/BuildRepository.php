<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Dibi\Exception;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\Exception\DuplicateEntryException;
use Edde\Repository\Exception\RepositoryException;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use Edde\User\Exception\UserNotSelectedException;
use PuffSmith\Build\Dto\BuildFilterDto;
use PuffSmith\Build\Dto\CreateDto;
use PuffSmith\Build\Dto\PatchDto;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;
use Throwable;

class BuildRepository extends AbstractRepository {
	use CurrentUserServiceTrait;
	use CoilRepositoryTrait;

	public function __construct() {
		parent::__construct([
			'active'  => IRepository::ORDER_DESC,
			'created' => IRepository::ORDER_DESC,
		], ['$_name_unique']);
		$this->orderByMap = [
			'atomizer' => 'a.name',
			'coil'     => 'w.name',
			'cotton'   => 'co.name',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_atomizer', 'a', '$.atomizer_id');
		$this->join($select, 'z_coil', 'c', '$.coil_id');
		$this->join($select, 'z_cotton', 'co', '$.cotton_id');
		$this->join($select, 'z_wire', 'w', 'c.wire_id');
		$this->join($select, 'z_driptip', 'd', '$.driptip_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter BuildFilterDto */
		$filter = $query->filter;

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'a.name',
			'w.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);
		!empty($filter->atomizerIds) && $this->where($select, '$.atomizer_id', 'in', $filter->atomizerIds);
		!empty($filter->coilIds) && $this->where($select, '$.coil_id', 'in', $filter->coilIds);
		!empty($filter->modIds) && $this->where($select, '$.mod_id', 'in', $filter->modIds);
		!empty($filter->cottonIds) && $this->where($select, '$.cotton_id', 'in', $filter->cottonIds);
		!empty($filter->wireIds) && $this->where($select, 'c.wire_id', 'in', $filter->wireIds);
		isset($filter->active) && $this->where($select, '$.active', $filter->active);
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	/**
	 * @param CreateDto $createDto
	 *
	 * @return mixed
	 *
	 * @throws \ClanCats\Hydrahon\Query\Sql\Exception
	 * @throws Exception
	 * @throws UserNotSelectedException
	 * @throws Throwable
	 */
	public function create(CreateDto $createDto) {
		if ($createDto->deactivate) {
			$this->table()->update(['active' => false])->where('atomizer_id', $createDto->atomizerId)->execute();
		}
		try {
			$coil = $this->coilRepository->create($createDto->coil);
		} catch (DuplicateEntryException $_) {
			$coil = $this->coilRepository->findByCreate($createDto->coil);
		}
		return $this->insert([
			'atomizer_id' => $createDto->atomizerId,
			'coil_id'     => $coil->id,
			'cotton_id'   => $createDto->cottonId,
			'driptip_id'  => $createDto->driptipId,
			'coils'       => $createDto->coils,
			'ohm'         => $createDto->ohm,
			'active'      => true,
			'created'     => new DateTime($createDto->created ?? 'now'),
			'user_id'     => $this->currentUserService->requiredId(),
		]);
	}

	/**
	 * @param PatchDto $patchDto
	 *
	 * @return mixed
	 *
	 * @throws Throwable
	 * @throws DuplicateEntryException
	 * @throws RepositoryException
	 */
	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'          => $patchDto->id,
			'created'     => $patchDto->created ? new DateTime($patchDto->created) : null,
			'atomizer_id' => $patchDto->atomizerId,
			'driptip_id'  => $patchDto->driptipId,
			'coil_id'     => $patchDto->coilId,
			'cotton_id'   => $patchDto->cottonId,
			'coils'       => $patchDto->coils,
			'ohm'         => $patchDto->ohm,
		]);
	}
}
