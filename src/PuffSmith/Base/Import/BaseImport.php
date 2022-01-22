<?php
declare(strict_types=1);

namespace PuffSmith\Base\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Base\Dto\Create\CreateDto;
use PuffSmith\Base\Dto\Import\BaseImportDto;
use PuffSmith\Base\Repository\BaseRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class BaseImport extends AbstractImporter {
	use BaseRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param BaseImportDto $item
	 */
	public function handle($item) {
		return $this->boosterRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'     => $item->name,
			'pg'       => (int)$item->pg,
			'vg'       => (int)$item->vg,
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
