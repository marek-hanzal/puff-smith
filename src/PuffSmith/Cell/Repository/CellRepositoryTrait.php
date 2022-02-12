<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Repository;

trait CellRepositoryTrait {
	/** @var CellRepository */
	protected CellRepository $cellRepository;

	/**
	 * @Inject
	 *
	 * @param CellRepository $cellRepository
	 */
	public function setCellRepository(CellRepository $cellRepository): void {
		$this->cellRepository = $cellRepository;
	}
}
