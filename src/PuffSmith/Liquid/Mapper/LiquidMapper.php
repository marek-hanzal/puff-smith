<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Liquid\Dto\LiquidDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class LiquidMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(LiquidDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'description' => $item->description,
			'vendorId'    => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'      => $this->vendorMapper->item($vendor),
		]);
	}
}