<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Repository;

trait WireTagRepositoryTrait {
	protected WireTagRepository $wireTagRepository;

	/**
	 * @Inject
	 *
	 * @param WireTagRepository $wireTagRepository
	 */
	public function setWireTagRepository(WireTagRepository $wireTagRepository): void {
		$this->wireTagRepository = $wireTagRepository;
	}
}
