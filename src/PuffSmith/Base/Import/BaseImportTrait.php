<?php
declare(strict_types=1);

namespace PuffSmith\Base\Import;

trait BaseImportTrait {
	protected BaseImport $boosterImport;

	/**
	 * @Inject
	 *
	 * @param BaseImport $boosterImport
	 */
	public function setBaseImport(BaseImport $boosterImport): void {
		$this->boosterImport = $boosterImport;
	}
}
