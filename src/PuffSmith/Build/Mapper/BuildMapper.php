<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

use Edde\Mapper\AbstractMapper;
use Edde\Tag\Mapper\TagMapperTrait;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Repository\BuildTagRepositoryTrait;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;
use function array_map;

class BuildMapper extends AbstractMapper {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;
	use CoilRepositoryTrait;
	use CoilMapperTrait;
	use CottonRepositoryTrait;
	use CottonMapperTrait;
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;
	use BuildTagRepositoryTrait;
	use TagMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(BuildDto::class, [
			'id'         => $item->id,
			'active'     => (bool)$item->active,
			'disabledOn' => $this->isoDateNull($item->disabledOn),
			'created'    => $this->isoDateNull($item->created),
			'coils'      => $item->coils,
			'driptipId'  => $item->driptip_id,
			'driptip'    => $item->driptip_id ? $this->driptipMapper->item($this->driptipRepository->find($item->driptip_id)) : null,
			'atomizerId' => ($atomizer = $this->atomizerRepository->find($item->atomizer_id))->id,
			'atomizer'   => $this->atomizerMapper->item($atomizer),
			'coilId'     => ($coil = $this->coilRepository->find($item->coil_id))->id,
			'coil'       => $this->coilMapper->item($coil),
			'cottonId'   => ($cotton = $this->cottonRepository->find($item->cotton_id))->id,
			'cotton'     => $this->cottonMapper->item($cotton),
			'ohm'        => $item->ohm,
			'draws'      => $draws = $this->tagMapper->map($this->buildTagRepository->findByGroup($item->id, 'draw')),
			'drawIds'    => array_map(function ($draw) {
				return $draw->id;
			}, $draws),
		]);
	}
}
