<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

trait AtomizerRepositoryTrait {
	/** @var AtomizerRepository */
	protected AtomizerRepository $atomizerRepository;

	/**
	 * @Inject
	 *
	 * @param AtomizerRepository $atomizerRepository
	 */
	public function setAtomizerRepository(AtomizerRepository $atomizerRepository): void {
		$this->atomizerRepository = $atomizerRepository;
	}
}
