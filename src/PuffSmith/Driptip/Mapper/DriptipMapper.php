<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class DriptipMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(DriptipDto::class, [
			'id'       => $item->id,
			'name'     => $item->name,
			'vendorId' => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'   => $this->vendorMapper->item($vendor),
		]);
	}
}
