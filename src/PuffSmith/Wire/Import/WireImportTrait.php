<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Import;

trait WireImportTrait {
	/** @var WireImport */
	protected WireImport $wireImport;

	/**
	 * @Inject
	 *
	 * @param WireImport $wireImport
	 */
	public function setWireImport(WireImport $wireImport): void {
		$this->wireImport = $wireImport;
	}
}
