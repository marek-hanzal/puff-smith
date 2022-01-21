<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use PuffSmith\Wire\Dto\WireDto;

class WireMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(WireDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'description' => $item->description,
			'ga'          => $item->ga,
			'vendorId'    => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'      => $this->vendorMapper->item($vendor),
		]);
	}
}
