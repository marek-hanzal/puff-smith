<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

trait MixtureCommentRepositoryTrait {
	protected MixtureCommentRepository $mixtureCommentRepository;

	/**
	 * @Inject
	 *
	 * @param MixtureCommentRepository $mixtureCommentRepository
	 */
	public function setMixtureCommentRepository(MixtureCommentRepository $mixtureCommentRepository): void {
		$this->mixtureCommentRepository = $mixtureCommentRepository;
	}
}
