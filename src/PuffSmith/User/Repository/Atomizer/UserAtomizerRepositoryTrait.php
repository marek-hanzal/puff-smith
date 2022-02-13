<?php
declare(strict_types=1);

namespace PuffSmith\User\Repository\Atomizer;

trait UserAtomizerRepositoryTrait {
	protected UserAtomizerRepository $userAtomizerRepository;

	/**
	 * @Inject
	 *
	 * @param UserAtomizerRepository $userAtomizerRepository
	 */
	public function setUserAtomizerRepository(UserAtomizerRepository $userAtomizerRepository): void {
		$this->userAtomizerRepository = $userAtomizerRepository;
	}
}
