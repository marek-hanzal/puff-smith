<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Atomizer\Dto\AtomizerImportDto;
use PuffSmith\Atomizer\Dto\CreateDto;
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
			'name'     => trim($item->name),
			'coilMin'  => isset($item->coilMin) ? (float)$item->coilMin : null,
			'coilMax'  => isset($item->coilMax) ? (float)$item->coilMax : null,
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
