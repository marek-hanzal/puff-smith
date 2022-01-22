<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Repository;

trait BoosterRepositoryTrait {
	protected BoosterRepository $boosterRepository;

	/**
	 * @Inject
	 *
	 * @param BoosterRepository $boosterRepository
	 */
	public function setBoosterRepository(BoosterRepository $boosterRepository): void {
		$this->boosterRepository = $boosterRepository;
	}
}
