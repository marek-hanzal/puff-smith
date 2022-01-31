<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilUpdate extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->dropForeignKey([
				'code',
				'user_id',
			])
			->save();

		$this
			->table('z_coil')
			->removeIndexByName('z_coil_code_unique')
			->save();

		$this
			->table('z_coil')
			->removeColumn('code')
			->addForeignKey('user_id', 'z_user', 'id', ['delete' => 'cascade'])
			->addUniqueIndex([
				'wraps',
				'ohm',
				'wire_id',
				'user_id',
			], 'z_coil_coil_unique')
			->save();
	}
}
