<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Booster\Dto\BoosterDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class BoosterMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(BoosterDto::class, [
			'id'       => $item->id,
			'name'     => $item->name,
			'nicotine' => $item->nicotine,
			'volume'   => $item->volume,
			'vendorId' => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'   => $this->vendorMapper->item($vendor),
		]);
	}
}
