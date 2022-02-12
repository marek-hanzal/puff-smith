<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Mapper;

use ClanCats\Hydrahon\Query\Sql\Exception;
use Edde\Mapper\AbstractMapper;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\Repository\Exception\RepositoryException;
use PuffSmith\Cell\Dto\CellDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class CellMapper extends AbstractMapper {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	/**
	 * @param $item
	 *
	 * @return CellDto
	 *
	 * @throws Exception
	 * @throws ItemException
	 * @throws SkipException
	 * @throws RepositoryException
	 */
	public function item($item) {
		return $this->dtoService->fromArray(CellDto::class, [
			'id'       => $item->id,
			'name'     => $item->name,
			'size'     => $item->size,
			'drain'    => $item->drain,
			'voltage'  => $item->voltage,
			'ohm'      => $item->ohm,
			'vendorId' => ($vendor = $this->vendorRepository->find($item->vendor_id))->id,
			'vendor'   => $this->vendorMapper->item($vendor),
		]);
	}
}
