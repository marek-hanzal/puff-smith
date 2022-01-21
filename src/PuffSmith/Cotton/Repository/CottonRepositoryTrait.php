<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Repository;

trait CottonRepositoryTrait {
	/** @var CottonRepository */
	protected CottonRepository $cottonRepository;

	/**
	 * @Inject
	 *
	 * @param CottonRepository $cottonRepository
	 */
	public function setCottonRepository(CottonRepository $cottonRepository): void {
		$this->cottonRepository = $cottonRepository;
	}
}
