<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Vendor\Dto\EnsureDto;
use PuffSmith\Vendor\Dto\VendorImportDto;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class VendorImport extends AbstractImporter {
	use VendorRepositoryTrait;

	/**
	 * @param VendorImportDto $item
	 */
	public function handle($item) {
		return $this->vendorRepository->ensure($this->dtoService->fromArray(EnsureDto::class, [
			'name' => $item->name,
		]));
	}
}
