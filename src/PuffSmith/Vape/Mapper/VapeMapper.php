<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Vape\Dto\VapeDto;

class VapeMapper extends AbstractMapper {
	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(VapeDto::class, [
			'id' => $item->id,
		]);
	}
}
