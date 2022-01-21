<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class AtomizerDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_atomizer', ['comment' => 'Table containing all (system-wide) known atomizers.'])
			->addStringColumn('name', 128, ['comment' => 'Vendor unique name of the atomizer.'])
			->addUuidForeignColumn('vendor', 'z_vendor')
			->addIndex([
				'name',
				'vendor_id',
			], ['name' => 'z_atomizer_name_unique'])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/atomizers.xlsx');
	}
}
