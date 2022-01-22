<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Repository;

trait LiquidRepositoryTrait {
	protected LiquidRepository $liquidRepository;

	/**
	 * @Inject
	 *
	 * @param LiquidRepository $liquidRepository
	 */
	public function setLiquidRepository(LiquidRepository $liquidRepository): void {
		$this->liquidRepository = $liquidRepository;
	}
}
