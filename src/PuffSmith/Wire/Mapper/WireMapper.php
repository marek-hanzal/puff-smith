<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Mapper;

use Edde\Mapper\AbstractMapper;
use Edde\Tag\Mapper\TagMapperTrait;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use PuffSmith\Wire\Dto\WireDto;
use PuffSmith\Wire\Repository\WireTagRepositoryTrait;
use function array_map;

class WireMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;
	use WireTagRepositoryTrait;
	use TagMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(WireDto::class, [
			'id'          => $item->id,
			'name'        => $item->name,
			'description' => $item->description,
			'ga'          => $item->ga,
			'vendorId'    => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'      => $this->vendorMapper->item($vendor),
			'draws'       => $draws = $this->tagMapper->map($this->wireTagRepository->findByGroup($item->id, 'draw')),
			'drawIds'     => array_map(function ($draw) {
				return $draw->id;
			}, $draws),
		]);
	}
}
