<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Vendor\Dto\VendorDto;

class VendorMapper extends AbstractMapper {
	public function item($item) {
		return $this->dtoService->fromArray(VendorDto::class, [
			'id'   => $item->id,
			'name' => $item->name,
		]);
	}
}
