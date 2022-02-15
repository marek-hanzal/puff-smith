<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Mapper;

use Edde\Mapper\AbstractMapper;
use Edde\Tag\Mapper\TagMapperTrait;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Mod\Repository\ModTagRepositoryTrait;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use function array_map;

class ModMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;
	use TagMapperTrait;
	use ModTagRepositoryTrait;

	public function item($item) {
		return $this->dtoService->fromArray(ModDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'power'       => $item->power,
			'voltage'     => $item->voltage,
			'vendorId'    => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'      => $this->vendorMapper->item($vendor),
			'cellTypes'   => $cellTypes = $this->tagMapper->map($this->modTagRepository->findByGroup($item->id, 'cell-type')),
			'cellTypeIds' => array_map(function ($cellType) {
				return $cellType->id;
			}, $cellTypes),
		]);
	}
}
