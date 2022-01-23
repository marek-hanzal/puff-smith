<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Mapper;

use Edde\Mapper\AbstractMapper;
use Edde\Tag\Mapper\TagMapperTrait;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Driptip\Repository\DriptipMaterialRepositoryTrait;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class DriptipMapper extends AbstractMapper {
	use DriptipMaterialRepositoryTrait;
	use TagMapperTrait;
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(DriptipDto::class, [
			'id'        => $item->id,
			'name'      => $item->name,
			'materials' => $this->tagMapper->map($this->driptipMaterialRepository->findMaterialByDriptip($item->id)),
			'vendorId'  => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'    => $this->vendorMapper->item($vendor),
		]);
	}
}
