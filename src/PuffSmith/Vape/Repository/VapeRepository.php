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
use PuffSmith\Vape\Dto\CreateDto;
use PuffSmith\Vape\Dto\PatchDto;
use PuffSmith\Vape\Dto\RateDto;
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
		if (isset($filter->rate)) {
			$filter->rate === 'unrated' && $this->where($select, '$.rating', 0);
			$filter->rate === 'rated' && $this->where($select, '$.rating', '>', 0);
		}
		!empty($filter->atomizerIds) && $this->where($select, 'b.atomizer_id', 'in', $filter->atomizerIds);
		!empty($filter->buildIds) && $this->where($select, '$.build_id', 'in', $filter->buildIds);
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
			'stamp'      => new DateTime(),
			'rating'     => 0,
			'taste'      => 0,
			'clouds'     => 0,
			'mtl'        => 0,
			'dl'         => 0,
			'dryhit'     => 0,
			'leaks'      => 0,
			'airflow'    => 0,
			'user_id'    => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
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

	public function rate(RateDto $rateDto) {
		return $this->change([
			'id'        => $rateDto->id,
			'rating'    => $rateDto->rating,
			'taste'     => $rateDto->taste,
			'throathit' => $rateDto->throathit,
			'fruits'    => $rateDto->fruits,
			'tobacco'   => $rateDto->tobacco,
			'cakes'     => $rateDto->cakes,
			'complex'   => $rateDto->complex,
			'fresh'     => $rateDto->fresh,
			'clouds'    => $rateDto->clouds,
			'mtl'       => $rateDto->mtl,
			'dl'        => $rateDto->dl,
			'dryhit'    => $rateDto->dryhit,
			'leaks'     => $rateDto->leaks,
			'airflow'   => $rateDto->airflow,
			'juice'     => $rateDto->juice,
			'power'     => $rateDto->power,
			'tc'        => $rateDto->tc,
		]);
	}
}
