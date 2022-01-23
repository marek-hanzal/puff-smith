<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Repository;

trait DriptipRepositoryTrait {
	protected DriptipRepository $driptipRepository;

	/**
	 * @Inject
	 *
	 * @param DriptipRepository $driptipRepository
	 */
	public function setDriptipRepository(DriptipRepository $driptipRepository): void {
		$this->driptipRepository = $driptipRepository;
	}
}
