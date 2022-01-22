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
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Vendor of a wire.'])
			->addUniqueIndex([
				'name',
				'vendor_id',
			], 'name')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/liquids.xlsx');
	}
}
