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
		$this->orderByMap = [
			'atomizer' => 'a.name',
			'mixture'  => 'l.name',
			'mod'      => 'mo.name',
			'coil'     => 'w.name',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_build', 'b', '$.build_id');
		$this->join($select, 'z_build_tag', 'bt', '$.build_id', 'build_id');
		$this->join($select, 'z_coil', 'c', 'b.coil_id');
		$this->join($select, 'z_wire', 'w', 'c.wire_id');
		$this->join($select, 'z_atomizer', 'a', 'b.atomizer_id');
		$this->join($select, 'z_mixture', 'm', '$.mixture_id');
		$this->join($select, 'z_mod', 'mo', '$.mod_id');
		$this->join($select, 'z_liquid', 'l', 'm.liquid_id');
		return $select->distinct();
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter VapeFilterDto */
		if (!empty($filter = $query->filter)) {
			$filter = $this->dtoService->fromObject(VapeFilterDto::class, $filter);
		}

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
		], $filter->fulltext);
		if (isset($filter->rate)) {
			$filter->rate === 'unrated' && $this->where($select, '$.rating', 0);
			$filter->rate === 'rated' && $this->where($select, '$.rating', '>', 0);
		}
		!empty($filter->vapeIds) && $this->where($select, '$.id', 'in', $filter->vapeIds);
		!empty($filter->atomizerIds) && $this->where($select, 'b.atomizer_id', 'in', $filter->atomizerIds);
		!empty($filter->wireIds) && $this->where($select, 'c.wire_id', 'in', $filter->wireIds);
		!empty($filter->buildIds) && $this->where($select, '$.build_id', 'in', $filter->buildIds);
		!empty($filter->cottonIds) && $this->where($select, 'b.cotton_id', 'in', $filter->cottonIds);
		!empty($filter->coilIds) && $this->where($select, 'b.coil_id', 'in', $filter->coilIds);
		!empty($filter->modIds) && $this->where($select, '$.mod_id', 'in', $filter->modIds);
		!empty($filter->mixtureIds) && $this->where($select, '$.mixture_id', 'in', $filter->mixtureIds);
		!empty($filter->liquidIds) && $this->where($select, 'm.liquid_id', 'in', $filter->liquidIds);
		!empty($filter->buildOhm) && $this->where($select, 'b.ohm', '>=', $filter->buildOhm[0]) && $this->where($select, 'b.ohm', '<=', $filter->buildOhm[1]);
		!empty($filter->coilSizes) && $this->where($select, 'c.size', '>=', $filter->coilSizes[0]) && $this->where($select, 'c.size', '<=', $filter->coilSizes[1]);
		!empty($filter->coilSize) && $this->where($select, 'c.size', $filter->coilSize);
		!empty($filter->drawIds) && $this->where($select, 'bt.tag_id', 'in', $filter->drawIds);
		isset($filter->ratingLte) && $this->where($select, '$.rating', '>=', $filter->ratingLte);
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
			'rating'     => $createDto->rating,
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
			'throathit'  => $patchDto->throathit,
			'fruits'     => $patchDto->fruits,
			'tobacco'    => $patchDto->tobacco,
			'cakes'      => $patchDto->cakes,
			'complex'    => $patchDto->complex,
			'fresh'      => $patchDto->fresh,
			'power'      => $patchDto->power,
			'tc'         => $patchDto->tc,
		]);
	}

	public function rate(RateDto $rateDto) {
		return $this->change([
			'id'        => $rateDto->id,
			'rating'    => $rateDto->rating,
			'throathit' => $rateDto->throathit,
			'fruits'    => $rateDto->fruits,
			'tobacco'   => $rateDto->tobacco,
			'cakes'     => $rateDto->cakes,
			'complex'   => $rateDto->complex,
			'fresh'     => $rateDto->fresh,
			'power'     => $rateDto->power,
			'tc'        => $rateDto->tc,
		]);
	}
}
