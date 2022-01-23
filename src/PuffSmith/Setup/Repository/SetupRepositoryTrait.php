<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Repository;

trait SetupRepositoryTrait {
	protected SetupRepository $setupRepository;

	/**
	 * @Inject
	 *
	 * @param SetupRepository $setupRepository
	 */
	public function setSetupRepository(SetupRepository $setupRepository): void {
		$this->setupRepository = $setupRepository;
	}
}
