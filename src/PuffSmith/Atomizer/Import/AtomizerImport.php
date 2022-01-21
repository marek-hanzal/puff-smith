<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Atomizer\Dto\Create\CreateDto;
use PuffSmith\Atomizer\Dto\Import\AtomizerImportDto;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class AtomizerImport extends AbstractImporter {
	use AtomizerRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param AtomizerImportDto $item
	 */
	public function handle($item) {
		return $this->atomizerRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'     => $item->name,
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
