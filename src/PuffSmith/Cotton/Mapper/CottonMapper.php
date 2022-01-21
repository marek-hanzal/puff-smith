<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class CottonMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(CottonDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'description' => $item->description,
			'vendorId'    => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'      => $this->vendorMapper->item($vendor),
		]);
	}
}
