<?php
declare(strict_types=1);

namespace PuffSmith\Base\Repository;

trait BaseRepositoryTrait {
	protected BaseRepository $baseRepository;

	/**
	 * @Inject
	 *
	 * @param BaseRepository $baseRepository
	 */
	public function setBaseRepository(BaseRepository $baseRepository): void {
		$this->baseRepository = $baseRepository;
	}
}
