<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Import;

trait LiquidImportTrait {
	protected LiquidImport $liquidImport;

	/**
	 * @Inject
	 *
	 * @param LiquidImport $liquidImport
	 */
	public function setLiquidImport(LiquidImport $liquidImport): void {
		$this->liquidImport = $liquidImport;
	}
}
