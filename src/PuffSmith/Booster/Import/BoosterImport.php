<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Import;

use Edde\Import\AbstractImporter;
use PuffSmith\Booster\Dto\Create\CreateDto;
use PuffSmith\Booster\Dto\Import\BoosterImportDto;
use PuffSmith\Booster\Repository\BoosterRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class BoosterImport extends AbstractImporter {
	use BoosterRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param BoosterImportDto $item
	 */
	public function handle($item) {
		return $this->boosterRepository->create($this->dtoService->fromArray(CreateDto::class, [
			'name'     => $item->name,
			'nicotine' => (int)$item->nicotine,
			'volume'   => (int)$item->volume,
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
		]));
	}
}
