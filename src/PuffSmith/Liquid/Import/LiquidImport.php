<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Liquid\Dto\Create\CreateDto;
use PuffSmith\Liquid\Dto\Import\LiquidImportDto;
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
			'description' => $item->description,
			'vendorId'    => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
