<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureActive extends CommonMigration {
	public function change(): void {
		$this
			->table('z_mixture')
			->addColumn('active', 'boolean', [
				'comment' => 'Is the given mixture active?',
				'default' => true,
			])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/translations.xlsx');
	}
}
