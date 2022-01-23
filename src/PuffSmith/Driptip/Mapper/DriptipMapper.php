<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Mapper;

use Edde\Mapper\AbstractMapper;
use Edde\Tag\Mapper\TagMapperTrait;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Driptip\Repository\DriptipMaterialRepositoryTrait;

class DriptipMapper extends AbstractMapper {
	use DriptipMaterialRepositoryTrait;
	use TagMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(DriptipDto::class, [
			'name'      => $item->name,
			'materials' => $this->tagMapper->map($this->driptipMaterialRepository->findMaterialByDriptip($item->id)),
		]);
	}
}
