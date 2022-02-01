<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Repository;

trait LiquidCommentRepositoryTrait {
	protected LiquidCommentRepository $liquidCommentRepository;

	/**
	 * @Inject
	 *
	 * @param LiquidCommentRepository $liquidCommentRepository
	 */
	public function setLiquidCommentRepository(LiquidCommentRepository $liquidCommentRepository): void {
		$this->liquidCommentRepository = $liquidCommentRepository;
	}
}
