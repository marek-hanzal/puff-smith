<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class AtomizerMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(AtomizerDto::class, [
			'id'       => $item->id,
			'name'     => $item->name,
			'vendorId' => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'   => $this->vendorMapper->item($vendor),
		]);
	}
}
