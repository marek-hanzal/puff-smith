<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Math\RandomServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Mixture\Dto\Create\CreateDto;
use PuffSmith\Mixture\Dto\MixtureFilterDto;
use PuffSmith\Mixture\Dto\Patch\PatchDto;

class MixtureRepository extends AbstractRepository {
	use CurrentUserServiceTrait;
	use RandomServiceTrait;

	public function __construct() {
		parent::__construct(['mixed' => IRepository::ORDER_DESC], [
			'$_name_unique',
			'$_code_unique',
		]);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter MixtureFilterDto */
		if (!empty($filter = $query->filter)) {
			$this->join($select, 'z_liquid', 'l', '$.liquid_id');
			$this->join($select, 'z_vendor', 'v', 'l.vendor_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'$.code',
			'l.name',
			'v.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, ['$.name'], $filter->name);
		isset($filter->code) && $this->fulltext($select, ['$.code'], $filter->code);
		isset($filter->userId) && $select->where('$.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'       => $createDto->name,
			'code'       => $createDto->code ?? $this->randomService->code(),
			'steep'      => $createDto->steep,
			'pg'         => $createDto->pg,
			'vg'         => $createDto->vg,
			'nicotine'   => $createDto->nicotine,
			'volume'     => $createDto->volume,
			'mixed'      => new DateTime($createDto->mixed),
			'expires'    => isset($createDto->expires) ? new DateTime($createDto->expires) : null,
			'liquid_id'  => $createDto->liquidId,
			'booster_id' => $createDto->boosterId,
			'base_id'    => $createDto->baseId,
			'user_id'    => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->patch([
			'id'         => $patchDto->id ?? null,
			'name'       => $patchDto->name ?? null,
			'code'       => $patchDto->code ?? $this->randomService->code(),
			'steep'      => $patchDto->steep ?? null,
			'pg'         => $patchDto->pg ?? null,
			'vg'         => $patchDto->vg ?? null,
			'nicotine'   => $patchDto->nicotine ?? null,
			'volume'     => $patchDto->volume ?? null,
			'mixed'      => isset($patchDto->mixed) ? new DateTime($patchDto->mixed) : null,
			'expires'    => isset($patchDto->expires) ? new DateTime($patchDto->expires) : null,
			'liquid_id'  => $patchDto->liquidId ?? null,
			'booster_id' => $patchDto->boosterId ?? null,
			'base_id'    => $patchDto->baseId ?? null,
		]);
	}
}
