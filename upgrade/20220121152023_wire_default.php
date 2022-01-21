<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class WireDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_wire', ['comment' => 'Various type of wires used to create a coil.'])
			->addStringColumn('name', 256, ['comment' => 'A name (or short description) of the wire, just for lookup.'])
			->addStringColumn('description', 512, [
				'comment' => 'Description for cases when a wire is complex (like claptons).',
				'null'    => true,
			])
			->addColumn('ga', 'integer', [
				'comment' => 'GA of this wire (in case of simple wires).',
				'null'    => true,
			])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Vendor of a wire.'])
			->addUniqueIndex([
				'vendor_id',
				'name',
				'ga',
			], 'name')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/wires.xlsx');
	}
}
