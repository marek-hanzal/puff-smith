<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CellDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_cell', ['comment' => 'Table of generic cells (batteries) for mods.'])
			->addStringColumn('name', 64, ['comment' => 'Model of the cell (for example HG2 or something like that)'])
			->addColumn('drain', 'integer', ['comment' => 'Maximum (real, not the one from vendor) cell drain (in ampers).'])
			->addColumn('size', 'integer', ['comment' => 'Size of the cell (18650, ...)'])
			->addColumn('voltage', 'decimal', [
				'precision' => 10,
				'scale'     => 1,
				'default'   => 3.7,
				'comment'   => 'Voltage of a cell.',
			])
			->addColumn('ohm', 'decimal', [
				'precision' => 10,
				'scale'     => 3,
				'comment'   => 'Minimum resistance this cell can (safely) handle.',
			])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Vendor of the cell'])
			->addUniqueIndex([
				'name',
				'vendor_id',
			], 'name')
			->save();

		$this
			->createUuidTable('z_user_cell', ['comment' => '"Purchased" cell with user specific data.'])
			->addStringColumn('code', 128, [
				'comment' => 'An ability to mark a cell with code to see how old the cell is.',
				'null'    => true,
			])
			->addColumn('stamp', 'date', ['comment' => 'When a cell has been purchased (to compute an age).'])
			->addUuidForeignColumn('cell', 'z_cell', ['comment' => 'A cell.'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'An owner of the cell.'])
			->addUniqueIndex([
				'code',
				'user_id',
			], 'code')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/cells.xlsx');
	}
}
