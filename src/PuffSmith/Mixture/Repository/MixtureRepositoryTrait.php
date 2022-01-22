<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

trait MixtureRepositoryTrait {
	protected MixtureRepository $mixtureRepository;

	/**
	 * @Inject
	 *
	 * @param MixtureRepository $mixtureRepository
	 */
	public function setMixtureRepository(MixtureRepository $mixtureRepository): void {
		$this->mixtureRepository = $mixtureRepository;
	}
}
