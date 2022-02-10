<?php
declare(strict_types=1);

namespace PuffSmith\Base\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Base\Dto\BaseDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class BaseMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(BaseDto::class, [
			'id'       => $item->id,
			'name'     => $item->name,
			'pg'       => $item->pg,
			'vg'       => $item->vg,
			'vendorId' => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'   => $this->vendorMapper->item($vendor),
		]);
	}
}
