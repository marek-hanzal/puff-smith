<?php
declare(strict_types=1);

namespace PuffSmith\Coil;

trait CoilServiceTrait {
	protected CoilService $coilService;

	/**
	 * @Inject
	 *
	 * @param CoilService $coilService
	 */
	public function setCoilService(CoilService $coilService): void {
		$this->coilService = $coilService;
	}
}
