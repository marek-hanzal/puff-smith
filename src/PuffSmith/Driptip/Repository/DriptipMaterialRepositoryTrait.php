<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Repository;

trait DriptipMaterialRepositoryTrait {
	protected DriptipMaterialRepository $driptipMaterialRepository;

	/**
	 * @Inject
	 *
	 * @param DriptipMaterialRepository $driptipMaterialRepository
	 */
	public function setDriptipMaterialRepository(DriptipMaterialRepository $driptipMaterialRepository): void {
		$this->driptipMaterialRepository = $driptipMaterialRepository;
	}
}
