<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

trait BuildTagRepositoryTrait {
	protected BuildTagRepository $buildTagRepository;

	/**
	 * @Inject
	 *
	 * @param BuildTagRepository $buildTagRepository
	 */
	public function setBuildTagRepository(BuildTagRepository $buildTagRepository): void {
		$this->buildTagRepository = $buildTagRepository;
	}
}
