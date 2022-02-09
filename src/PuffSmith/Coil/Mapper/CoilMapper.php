<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Wire\Mapper\WireMapperTrait;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

class CoilMapper extends AbstractMapper {
	use WireRepositoryTrait;
	use WireMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(CoilDto::class, [
			'id'     => $item->id,
			'wraps'  => $item->wraps,
			'spaced' => (bool)$item->spaced,
			'stamp'  => $this->isoDateNull($item->stamp),
			'size'   => $item->size,
			'wireId' => ($wire = $this->wireRepository->find($item->wire_id))->id,
			'wire'   => $this->wireMapper->item($wire),
		]);
	}
}
