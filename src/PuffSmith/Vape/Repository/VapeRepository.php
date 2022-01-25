<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Vape\Dto\Create\CreateDto;
use PuffSmith\Vape\Dto\Patch\PatchDto;
use PuffSmith\Vape\Dto\VapeFilterDto;

class VapeRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter VapeFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'z_vape.id',
		], $filter->fulltext);
		isset($filter->atomizerIds) && $select
			->leftJoin('z_setup as s', 's.id', '=', 'z_vape.setup_id')
			->leftJoin('z_build as b', 'b.id', '=', 's.build_id')
			->where('b.atomizer_id', 'in', $filter->atomizerIds);
		isset($filter->modIds) && $select
			->leftJoin('z_setup as s', 's.id', '=', 'z_vape.setup_id')
			->where('s.mod_id', 'in', $filter->modIds);
		isset($filter->mixtureIds) && $select->where('z_vape.mixture_id', 'in', $filter->mixtureIds);

		isset($filter->userId) && $select->where('z_vape.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'setup_id'   => $createDto->setupId,
			'mixture_id' => $createDto->mixtureId,
			'driptip_id' => $createDto->driptipId,
			'rating'     => $createDto->rating,
			'taste'      => $createDto->taste,
			'throathit'  => $createDto->throathit,
			'fruits'     => $createDto->fruits,
			'tobacco'    => $createDto->tobacco,
			'cakes'      => $createDto->cakes,
			'complex'    => $createDto->complex,
			'fresh'      => $createDto->fresh,
			'clouds'     => $createDto->clouds,
			'mtl'        => $createDto->mtl,
			'dl'         => $createDto->dl,
			'dryhit'     => $createDto->dryhit,
			'leaks'      => $createDto->leaks,
			'airflow'    => $createDto->airflow,
			'juice'      => $createDto->juice,
			'power'      => $createDto->power,
			'tc'         => $createDto->tc,
			'stamp'      => new DateTime(),
			'user_id'    => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->patch([
			'id'         => $patchDto->id,
			'setup_id'   => $patchDto->setupId,
			'mixture_id' => $patchDto->mixtureId,
			'driptip_id' => $patchDto->driptipId,
			'rating'     => $patchDto->rating,
			'taste'      => $patchDto->taste,
			'throathit'  => $patchDto->throathit,
			'fruits'     => $patchDto->fruits,
			'tobacco'    => $patchDto->tobacco,
			'cakes'      => $patchDto->cakes,
			'complex'    => $patchDto->complex,
			'fresh'      => $patchDto->fresh,
			'clouds'     => $patchDto->clouds,
			'mtl'        => $patchDto->mtl,
			'dl'         => $patchDto->dl,
			'dryhit'     => $patchDto->dryhit,
			'leaks'      => $patchDto->leaks,
			'airflow'    => $patchDto->airflow,
			'juice'      => $patchDto->juice,
			'power'      => $patchDto->power,
			'tc'         => $patchDto->tc,
		]);
	}
}
