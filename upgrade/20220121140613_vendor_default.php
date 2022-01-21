<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VendorDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_vendor', ['comment' => 'General vendors of the things (mods, atomizers, ...).'])
			->addStringColumn('name', 128, [
				'comment' => 'The name of a vendor.',
				'unique'  => true,
			])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/vendors.xlsx');
	}
}
