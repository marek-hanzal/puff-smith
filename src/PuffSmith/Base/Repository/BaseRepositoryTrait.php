<?php
declare(strict_types=1);

namespace PuffSmith\Base\Repository;

trait BaseRepositoryTrait {
	protected BaseRepository $boosterRepository;

	/**
	 * @Inject
	 *
	 * @param BaseRepository $boosterRepository
	 */
	public function setBaseRepository(BaseRepository $boosterRepository): void {
		$this->boosterRepository = $boosterRepository;
	}
}
