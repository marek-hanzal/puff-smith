<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Import;

trait BoosterImportTrait {
	protected BoosterImport $boosterImport;

	/**
	 * @Inject
	 *
	 * @param BoosterImport $boosterImport
	 */
	public function setBoosterImport(BoosterImport $boosterImport): void {
		$this->boosterImport = $boosterImport;
	}
}
