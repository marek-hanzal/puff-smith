<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Mod\Dto\Create\CreateDto;
use PuffSmith\Mod\Dto\Import\ModImportDto;
use PuffSmith\Mod\Repository\ModRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class ModImport extends AbstractImporter {
	use ModRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param ModImportDto $item
	 */
	public function handle($item) {
		return $this->modRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'     => $item->name,
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
