<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

trait BuildRepositoryTrait {
	protected BuildRepository $buildRepository;

	/**
	 * @Inject
	 *
	 * @param BuildRepository $buildRepository
	 */
	public function setBuildRepository(BuildRepository $buildRepository): void {
		$this->buildRepository = $buildRepository;
	}
}
