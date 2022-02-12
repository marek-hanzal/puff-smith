<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Cotton\Dto\CottonImportDto;
use PuffSmith\Cotton\Dto\CreateDto;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class CottonImport extends AbstractImporter {
	use CottonRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param CottonImportDto $item
	 */
	public function handle($item) {
		return $this->cottonRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'        => trim($item->name),
			'description' => isset($item->description) ? trim($item->description) : null,
			'vendorId'    => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
