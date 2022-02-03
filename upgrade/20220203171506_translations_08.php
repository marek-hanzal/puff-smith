<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class Translations08 extends CommonMigration {
	public function change(): void {
		$this->importExcel(__DIR__ . '/fixtures/translations.xlsx');
	}
}
