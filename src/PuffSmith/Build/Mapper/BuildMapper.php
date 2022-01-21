<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Build\Dto\BuildDto;

class BuildMapper extends AbstractMapper {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(BuildDto::class, [
			'id'         => $item->id,
			'name'       => $item->name,
			'atomizerId' => ($atomizer = $this->atomizerRepository->find($item->atomizer_id))->id,
			'atomizer'   => $this->atomizerMapper->item($atomizer),
		]);
	}
}
