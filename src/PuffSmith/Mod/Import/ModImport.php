<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Import;

use Edde\Import\AbstractImporter;
use Edde\Repository\Exception\DuplicateEntryException;
use PuffSmith\Mod\Dto\CreateDto;
use PuffSmith\Mod\Dto\ModImportDto;
use PuffSmith\Mod\Repository\ModRepositoryTrait;
use PuffSmith\Vendor\Dto\EnsureDto;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class ModImport extends AbstractImporter {
	use ModRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param ModImportDto $item
	 */
	public function handle($item) {
		$create = $this->dtoService->fromArray(CreateDto::class, [
			'name'     => $item->name,
			'power'    => isset($item->power) ? (int)$item->power : null,
			'voltage'  => isset($item->voltage) ? (float)$item->voltage : null,
			'vendorId' => $this->vendorRepository->ensure($this->dtoService->fromArray(EnsureDto::class, ['name' => $item->vendor]))->id,
		]);
		try {
			return $this->modRepository->create($create);
		} catch (DuplicateEntryException $exception) {
			$mod = $this->modRepository->findByCreate($create);
			return $this->modRepository->change([
				'id'      => $mod->id,
				'power'   => isset($item->power) ? (int)$item->power : null,
				'voltage' => isset($item->voltage) ? (float)$item->voltage : null,
			]);
		}
	}
}
