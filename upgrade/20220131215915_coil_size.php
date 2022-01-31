<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilSize extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->addColumn('size', 'float', [
				'comment' => 'Coil size in mm (for example 0.25).',
				'default' => 0.3,
			])
			->removeIndexByName('z_coil_z_coil_coil_unique_unique')
			->addUniqueIndex([
				'wraps',
				'ohm',
				'size',
				'wire_id',
				'user_id',
			], 'coil')
			->save();
	}
}
