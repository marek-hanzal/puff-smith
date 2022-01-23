<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class LiquidDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_liquid', ['comment' => 'All known liquids in the system (like atomizers and so.).'])
			->addStringColumn('name', 128, ['comment' => 'Name of the liquid; should match a vendor.'])
			->addStringColumn('description', 512, [
				'comment' => 'Optional liquid description.',
				'null'    => true,
			])
			->addColumn('pg', 'integer', ['comment' => 'Amount of PG in a liquid (percentage).'])
			->addColumn('vg', 'integer', ['comment' => 'Amount of VG in a liquid (percentage).'])
			->addColumn('volume', 'integer', ['comment' => 'Amount of liquid (or aroma for SnV).'])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Vendor of a liquid.'])
			->addUniqueIndex([
				'name',
				'vendor_id',
			], 'name')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/liquids.xlsx');
		sleep(1);
	}
}
