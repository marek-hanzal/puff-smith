<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

trait AtomizerCommentRepositoryTrait {
	protected AtomizerCommentRepository $atomizerCommentRepository;

	/**
	 * @Inject
	 *
	 * @param AtomizerCommentRepository $atomizerCommentRepository
	 */
	public function setAtomizerCommentRepository(AtomizerCommentRepository $atomizerCommentRepository): void {
		$this->atomizerCommentRepository = $atomizerCommentRepository;
	}
}
