<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Base\Mapper\BaseMapperTrait;
use PuffSmith\Base\Repository\BaseRepositoryTrait;
use PuffSmith\Booster\Mapper\BoosterMapperTrait;
use PuffSmith\Booster\Repository\BoosterRepositoryTrait;
use PuffSmith\Liquid\Mapper\LiquidMapperTrait;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;
use PuffSmith\Mixture\Dto\MixtureDto;

class MixtureMapper extends AbstractMapper {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;
	use BoosterRepositoryTrait;
	use BoosterMapperTrait;
	use BaseRepositoryTrait;
	use BaseMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(MixtureDto::class, [
			'id'        => $item->id,
			'name'      => $item->name,
			'code'      => $item->code,
			'steep'     => isset($item->steep) ? (int)$item->steep : null,
			'pg'        => $item->pg,
			'vg'        => $item->vg,
			'nicotine'  => $item->nicotine,
			'volume'    => $item->volume,
			'mixed'     => $this->isoDateNull($item->mixed),
			'expires'   => $this->isoDateNull($item->expires),
			'liquidId'  => ($liquid = $this->liquidRepository->find($item->liquid_id))->id,
			'liquid'    => $this->liquidMapper->item($liquid),
			'boosterId' => isset($item->booster_id) ? ($booster = $this->boosterRepository->find($item->booster_id))->id : null,
			'booster'   => isset($booster) ? $this->boosterMapper->item($booster) : null,
			'baseId'    => isset($item->base_id) ? ($base = $this->baseRepository->find($item->base_id))->id : null,
			'base'      => isset($base) ? $this->baseMapper->item($base) : null,
		]);
	}

}
