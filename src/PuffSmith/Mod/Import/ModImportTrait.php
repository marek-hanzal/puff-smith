<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Import;

class ModImportTrait {
	/** @var ModImport */
	protected ModImport $modImport;

	/**
	 * @Inject
	 *
	 * @param ModImport $modImport
	 */
	public function setModImport(ModImport $modImport): void {
		$this->modImport = $modImport;
	}
}
