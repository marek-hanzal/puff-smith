<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Import;

use Edde\Import\AbstractImporter;
use Edde\Repository\Exception\DuplicateEntryException;
use Edde\Tag\Repository\TagRepositoryTrait;
use PuffSmith\Atomizer\Dto\AtomizerImportDto;
use PuffSmith\Atomizer\Dto\CreateDto;
use PuffSmith\Atomizer\Dto\PatchDto;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Vendor\Dto\EnsureDto;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;
use function array_map;
use function explode;
use function filter_var;
use function trim;
use const FILTER_VALIDATE_BOOLEAN;

class AtomizerImport extends AbstractImporter {
	use AtomizerRepositoryTrait;
	use VendorRepositoryTrait;
	use TagRepositoryTrait;

	/**
	 * @param AtomizerImportDto $item
	 */
	public function handle($item) {
		$create = $this->dtoService->fromArray(CreateDto::class, [
			'name'     => trim($item->name),
			'vendorId' => $this->vendorRepository->ensure($this->dtoService->fromArray(EnsureDto::class, ['name' => $item->vendor]))->id,
			'coilMin'  => isset($item->coilMin) ? (float)$item->coilMin : null,
			'coilMax'  => isset($item->coilMax) ? (float)$item->coilMax : null,
			'dual'     => filter_var($item->dual, FILTER_VALIDATE_BOOLEAN),
			'typeId'   => isset($item->type) ? $this->tagRepository->requireByCodeGroup($item->type, 'atomizer-type')->id : null,
			'drawIds'  => array_map(function (string $draw) {
				return $this->tagRepository->requireByCodeGroup(trim($draw), 'draw')->id;
			}, explode(',', $item->draw ?? '')),
		]);
		try {
			return $this->atomizerRepository->create($create);
		} catch (DuplicateEntryException $exception) {
			$atomizer = $this->atomizerRepository->findByCreate($create);
			return $this->atomizerRepository->update($this->dtoService->fromArray(PatchDto::class, [
				'id'       => $atomizer->id,
				'name'     => $atomizer->name,
				'vendorId' => $atomizer->vendor_id,
				'coilMin'  => isset($item->coilMin) ? (float)$item->coilMin : null,
				'coilMax'  => isset($item->coilMax) ? (float)$item->coilMax : null,
				'dual'     => filter_var($item->dual, FILTER_VALIDATE_BOOLEAN),
				'typeId'   => isset($item->type) ? $this->tagRepository->requireByCodeGroup($item->type, 'atomizer-type')->id : null,
				'drawIds'  => array_map(function (string $draw) {
					return $this->tagRepository->requireByCodeGroup(trim($draw), 'draw')->id;
				}, explode(',', $item->draw ?? '')),
			]));
		}
	}
}
