<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use DateTime;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Vape\Dto\Create\CreateDto;
use PuffSmith\Vape\Dto\Patch\PatchDto;
use PuffSmith\Vape\Dto\VapeFilterDto;

class VapeRepository extends AbstractRepository {
	use CurrentUserServiceTrait;
	use DtoServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter VapeFilterDto */
		if (!empty($filter = $query->filter)) {
			$filter = $this->dtoService->fromObject(VapeFilterDto::class, $filter);
			$this->join($select, 'z_build', 'b', '$.build_id');
			$this->join($select, 'z_mixture', 'm', '$.mixture_id');
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
		], $filter->fulltext);
		!empty($filter->atomizerIds) && $this->where($select, 'b.atomizer_id', 'in', $filter->atomizerIds);
		!empty($filter->coilIds) && $this->where($select, 'b.coil_id', 'in', $filter->coilIds);
		!empty($filter->modIds) && $this->where($select, '$.mod_id', 'in', $filter->modIds);
		!empty($filter->mixtureIds) && $this->where($select, '$.mixture_id', 'in', $filter->mixtureIds);
		!empty($filter->liquidIds) && $this->where($select, 'm.liquid_id', 'in', $filter->liquidIds);
		isset($filter->userId) && $this->where($select, '$.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'build_id'   => $createDto->buildId,
			'mod_id'     => $createDto->modId,
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
			'build_id'   => $patchDto->buildId,
			'mod_id'     => $patchDto->modId,
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
