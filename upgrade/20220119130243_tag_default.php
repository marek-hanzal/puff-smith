<?php
declare(strict_types=1);

use Edde\Upgrade\TagUpgrade;

final class TagDefault extends TagUpgrade {
	public function change(): void {
		parent::change();
		$this->importExcel(__DIR__ . '/fixtures/tags.xlsx');
	}
}
