<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use PuffSmith\Wire\Dto\Create\CreateDto;
use PuffSmith\Wire\Dto\Import\WireImportDto;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

class WireImport extends AbstractImporter {
	use WireRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param WireImportDto $item
	 */
	public function handle($item) {
		return $this->wireRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'        => $item->name,
			'description' => $item->description,
			'ga'          => isset($item->ga) ? (int)$item->ga : null,
			'vendorId'    => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
