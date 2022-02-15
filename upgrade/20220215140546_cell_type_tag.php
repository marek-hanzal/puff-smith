<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CellTypeTag extends CommonMigration {
	public function change(): void {
		$this->truncate('z_cell');

		$this
			->table('z_cell')
			->removeColumn('size')
			->addUuidForeignColumn('type', 'z_tag', ['comment' => 'Cell type.'])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/cells.xlsx');
	}
}
