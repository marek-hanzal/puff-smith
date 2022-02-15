<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

trait ModTagRepositoryTrait {
	protected ModTagRepository $modTagRepository;

	/**
	 * @Inject
	 *
	 * @param ModTagRepository $modTagRepository
	 */
	public function setModTagRepository(ModTagRepository $modTagRepository): void {
		$this->modTagRepository = $modTagRepository;
	}
}
