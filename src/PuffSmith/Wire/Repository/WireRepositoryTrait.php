<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Repository;

trait WireRepositoryTrait {
	/** @var WireRepository */
	protected WireRepository $wireRepository;

	/**
	 * @Inject
	 *
	 * @param WireRepository $wireRepository
	 */
	public function setWireRepository(WireRepository $wireRepository): void {
		$this->wireRepository = $wireRepository;
	}
}
