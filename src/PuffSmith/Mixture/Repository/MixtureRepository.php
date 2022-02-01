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
		parent::__construct([
			'active' => IRepository::ORDER_DESC,
			'mixed'  => IRepository::ORDER_DESC,
		], [
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
			'$.code',
			'l.name',
			'v.name',
		], $filter->fulltext);
		isset($filter->active) && $this->where($select, '$.active', $filter->active);
		isset($filter->rating) && $this->where($select, '$.rating', '>=', $filter->rating);
		isset($filter->name) && $this->fulltext($select, ['l.name'], $filter->name);
		!empty($filter->vendorIds) && $this->where($select, 'l.vendor_id', 'in', $filter->vendorIds);
		!empty($filter->baseIds) && $this->where($select, '$.base_id', 'in', $filter->baseIds);
		!empty($filter->boosterIds) && $this->where($select, '$.booster_id', 'in', $filter->boosterIds);
		isset($filter->code) && $this->fulltext($select, ['$.code'], $filter->code);
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'code'       => $createDto->code ?? $this->randomService->code(),
			'steep'      => $createDto->steep,
			'rating'     => $createDto->rating,
			'active'     => true,
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
			'id'         => $patchDto->id,
			'code'       => $patchDto->code ?? $this->randomService->code(),
			'steep'      => $patchDto->steep,
			'rating'     => $patchDto->rating,
			'active'     => $patchDto->active,
			'pg'         => $patchDto->pg,
			'vg'         => $patchDto->vg,
			'nicotine'   => $patchDto->nicotine,
			'volume'     => $patchDto->volume,
			'mixed'      => isset($patchDto->mixed) ? new DateTime($patchDto->mixed) : null,
			'expires'    => isset($patchDto->expires) ? new DateTime($patchDto->expires) : null,
			'liquid_id'  => $patchDto->liquidId,
			'booster_id' => $patchDto->boosterId,
			'base_id'    => $patchDto->baseId,
		]);
	}
}
