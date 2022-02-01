<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

trait VapeCommentRepositoryTrait {
	protected VapeCommentRepository $vapeCommentRepository;

	/**
	 * @Inject
	 *
	 * @param VapeCommentRepository $vapeCommentRepository
	 */
	public function setVapeCommentRepository(VapeCommentRepository $vapeCommentRepository): void {
		$this->vapeCommentRepository = $vapeCommentRepository;
	}
}
