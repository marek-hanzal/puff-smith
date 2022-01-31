<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

trait BuildCommentRepositoryTrait {
	protected BuildCommentRepository $buildCommentRepository;

	/**
	 * @Inject
	 *
	 * @param BuildCommentRepository $buildCommentRepository
	 */
	public function setBuildCommentRepository(BuildCommentRepository $buildCommentRepository): void {
		$this->buildCommentRepository = $buildCommentRepository;
	}
}
