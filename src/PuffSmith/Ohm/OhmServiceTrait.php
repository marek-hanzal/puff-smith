<?php
declare(strict_types=1);

namespace PuffSmith\Ohm;

trait OhmServiceTrait {
	protected OhmService $ohmService;

	/**
	 * @Inject
	 *
	 * @param OhmService $ohmService
	 */
	public function setOhmService(OhmService $ohmService): void {
		$this->ohmService = $ohmService;
	}
}
