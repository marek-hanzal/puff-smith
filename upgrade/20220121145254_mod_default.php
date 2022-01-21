<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class ModDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_mod', ['comment' => 'Table containing all (system-wide) known mods.'])
			->addStringColumn('name', 128, ['comment' => 'Vendor unique name of the mod.'])
			->addColumn('power', 'integer', [
				'comment' => 'Maximum power a mod can supplement (watts).',
				'null'    => true,
			])
			->addUuidForeignColumn('vendor', 'z_vendor')
			->addUniqueIndex([
				'name',
				'vendor_id',
			], 'name')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/mods.xlsx');
	}
}
