<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DropCoilOhm extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->dropForeignKey(['wire_id'])
			->dropForeignKey(['user_id'])
			->removeIndexByName('z_coil_coil_unique')
			->removeColumn('ohm')
			->removeColumn('user_id')
			->save();

		$this
			->table('z_coil')
			->addForeignKey('wire_id', 'z_wire', 'id', ['delete' => 'cascade'])
			->addUniqueIndex([
				'wraps',
				'size',
				'wire_id',
			], 'coil')
			->save();
	}
}
