<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Import;

use Edde\Import\AbstractImporter;
use Edde\Repository\Exception\DuplicateEntryException;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use PuffSmith\Wire\Dto\CreateDto;
use PuffSmith\Wire\Dto\WireImportDto;
use PuffSmith\Wire\Repository\WireRepositoryTrait;
use function filter_var;
use const FILTER_VALIDATE_BOOLEAN;

class WireImport extends AbstractImporter {
	use WireRepositoryTrait;
	use VendorRepositoryTrait;

	/**
	 * @param WireImportDto $item
	 */
	public function handle($item) {
		/** @var $create CreateDto */
		$create = $this->dtoService->fromArray(CreateDto::class, [
			'name'        => $item->name,
			'description' => $item->description,
			'tc'          => filter_var($item->tc, FILTER_VALIDATE_BOOLEAN),
			'ga'          => isset($item->ga) ? (int)$item->ga : null,
			'vendorId'    => $this->vendorRepository->findByVarious($item->vendor)->id,
		]);
		try {
			return $this->wireRepository->create($create);
		} catch (DuplicateEntryException $exception) {
			$wire = $this->wireRepository->findByCreate($create);
			return $this->wireRepository->change([
				'id'          => $wire->id,
				'description' => $create->description,
				'tc'          => $create->tc,
			]);
		}
	}
}
