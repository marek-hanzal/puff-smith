<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

trait ModRepositoryTrait {
	/** @var ModRepository */
	protected ModRepository $modRepository;

	/**
	 * @Inject
	 *
	 * @param ModRepository $modRepository
	 */
	public function setModRepository(ModRepository $modRepository): void {
		$this->modRepository = $modRepository;
	}
}
