<?php
declare(strict_types=1);

namespace PuffSmith\Base\Import;

trait BaseImportTrait {
	protected BaseImport $baseImport;

	/**
	 * @Inject
	 *
	 * @param BaseImport $baseImport
	 */
	public function setBaseImport(BaseImport $baseImport): void {
		$this->baseImport = $baseImport;
	}
}
