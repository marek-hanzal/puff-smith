<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class ModDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_mod', ['comment' => 'Table containing all (system-wide) known mods.'])
			->addStringColumn('name', 128, ['comment' => 'Vendor unique name of the mod.'])
			->addUuidForeignColumn('vendor', 'z_vendor')
			->addIndex([
				'name',
				'vendor_id',
			], ['name' => 'z_mod_name_unique'])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/mods.xlsx');
	}
}
