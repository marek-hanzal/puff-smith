<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Liquid\Dto\CreateDto;
use PuffSmith\Liquid\Dto\LiquidImportDto;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class LiquidImport extends AbstractImporter {
	use LiquidRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param LiquidImportDto $item
	 */
	public function handle($item) {
		return $this->liquidRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'        => $item->name,
			'pg'          => (int)$item->pg,
			'vg'          => (int)$item->vg,
			'volume'      => (int)$item->volume,
			'description' => $item->description,
			'vendorId'    => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
