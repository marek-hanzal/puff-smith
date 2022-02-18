<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Import;

use Edde\Import\AbstractImporter;
use Edde\Repository\Exception\DuplicateEntryException;
use PuffSmith\Atomizer\Dto\AtomizerImportDto;
use PuffSmith\Atomizer\Dto\CreateDto;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use function filter_var;
use function trim;
use const FILTER_VALIDATE_BOOLEAN;

class AtomizerImport extends AbstractImporter {
	use AtomizerRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param AtomizerImportDto $item
	 */
	public function handle($item) {
		$create = $this->dtoService->fromArray(CreateDto::class, [
			'name'     => trim($item->name),
			'vendorId' => $this->vendorRepository->findByVarious($item->vendor)->id,
			'coilMin'  => isset($item->coilMin) ? (float)$item->coilMin : null,
			'coilMax'  => isset($item->coilMax) ? (float)$item->coilMax : null,
			'dual'     => filter_var($item->dual, FILTER_VALIDATE_BOOLEAN),
		]);
		try {
			return $this->atomizerRepository->create($create);
		} catch (DuplicateEntryException $exception) {
			$atomizer = $this->atomizerRepository->findByCreate($create);
			return $this->atomizerRepository->change([
				'id'      => $atomizer->id,
				'coilMin' => isset($item->coilMin) ? (float)$item->coilMin : null,
				'coilMax' => isset($item->coilMax) ? (float)$item->coilMax : null,
				'dual'    => filter_var($item->dual, FILTER_VALIDATE_BOOLEAN),
			]);
		}
	}
}
