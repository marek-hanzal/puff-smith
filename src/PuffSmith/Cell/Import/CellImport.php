<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Import;

use Edde\Import\AbstractImporter;
use Edde\Repository\Exception\DuplicateEntryException;
use PuffSmith\Cell\Dto\CellImportDto;
use PuffSmith\Cell\Dto\CreateDto;
use PuffSmith\Cell\Dto\PatchDto;
use PuffSmith\Cell\Repository\CellRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use function trim;

class CellImport extends AbstractImporter {
	use CellRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param CellImportDto $item
	 */
	public function handle($item) {
		$create = $this->dtoService->fromArray(CreateDto::class, [
			'name'     => trim($item->name),
			'drain'    => (int)$item->drain,
			'size'     => (int)$item->size,
			'voltage'  => (float)$item->voltage,
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
		]);
		try {
			return $this->cellRepository->create($create);
		} catch (DuplicateEntryException $exception) {
			$cell = $this->cellRepository->findByCreate($create);
			$this->cellRepository->update($this->dtoService->fromArray(PatchDto::class, [
				'id'       => $cell->id,
				'name'     => trim($item->name),
				'drain'    => (int)$item->drain,
				'size'     => (int)$item->size,
				'voltage'  => (float)$item->voltage,
				'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
			]));
			return $cell;
		}
	}
}
