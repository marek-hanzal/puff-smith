<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class ModMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(ModDto::class, [
			'id'       => $item->id,
			'name'     => $item->name,
			'power'    => $item->power,
			'vendorId' => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'   => $this->vendorMapper->item($vendor),
		]);
	}
}
