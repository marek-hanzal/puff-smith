<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Repository;

trait CoilRepositoryTrait {
	/** @var CoilRepository */
	protected CoilRepository $coilRepository;

	/**
	 * @Inject
	 *
	 * @param CoilRepository $coilRepository
	 */
	public function setCoilRepository(CoilRepository $coilRepository): void {
		$this->coilRepository = $coilRepository;
	}
}
