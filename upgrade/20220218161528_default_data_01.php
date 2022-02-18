<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DefaultData01 extends CommonMigration {
	public function change(): void {
		$this->importExcel(__DIR__ . '/fixtures/atomizers.xlsx');
		sleep(1);
		$this->importExcel(__DIR__ . '/fixtures/translations.xlsx');
		sleep(1);
		$this->importExcel(__DIR__ . '/fixtures/mods.xlsx');
		sleep(1);
	}
}
