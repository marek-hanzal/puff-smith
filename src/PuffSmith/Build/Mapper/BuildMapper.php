<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;

class BuildMapper extends AbstractMapper {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;
	use CoilRepositoryTrait;
	use CoilMapperTrait;
	use CottonRepositoryTrait;
	use CottonMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(BuildDto::class, [
			'id'           => $item->id,
			'glow'         => $item->glow,
			'active'       => (bool)$item->active,
			'created'      => $this->isoDateNull($item->created),
			'coils'        => $item->coils,
			'coilOffset'   => $item->coilOffset,
			'cottonOffset' => $item->cottonOffset,
			'atomizerId'   => ($atomizer = $this->atomizerRepository->find($item->atomizer_id))->id,
			'atomizer'     => $this->atomizerMapper->item($atomizer),
			'coilId'       => ($coil = $this->coilRepository->find($item->coil_id))->id,
			'coil'         => $this->coilMapper->item($coil),
			'cottonId'     => ($cotton = $this->cottonRepository->find($item->cotton_id))->id,
			'cotton'       => $this->cottonMapper->item($cotton),
			'ohm'          => $item->ohm ?? $coil->ohm,
		]);
	}
}
