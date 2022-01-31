<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Repository;

trait CommentRepositoryTrait {
	protected CommentRepository $commentRepository;

	/**
	 * @Inject
	 *
	 * @param CommentRepository $commentRepository
	 */
	public function setCommentRepository(CommentRepository $commentRepository): void {
		$this->commentRepository = $commentRepository;
	}
}
