<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

trait AtomizerTagRepositoryTrait {
	protected AtomizerTagRepository $atomizerTagRepository;

	/**
	 * @Inject
	 *
	 * @param AtomizerTagRepository $atomizerTagRepository
	 */
	public function setAtomizerTagRepository(AtomizerTagRepository $atomizerTagRepository): void {
		$this->atomizerTagRepository = $atomizerTagRepository;
	}
}
