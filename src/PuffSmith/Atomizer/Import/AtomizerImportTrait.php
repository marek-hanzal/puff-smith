<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Import;

trait AtomizerImportTrait {
	/** @var AtomizerImport */
	protected AtomizerImport $atomizerImport;

	/**
	 * @Inject
	 *
	 * @param AtomizerImport $atomizerImport
	 */
	public function setAtomizerImport(AtomizerImport $atomizerImport): void {
		$this->atomizerImport = $atomizerImport;
	}
}
