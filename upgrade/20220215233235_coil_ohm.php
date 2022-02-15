<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilOhm extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->addColumn('ohm', 'decimal', [
				'precision' => 3,
				'scale'     => 2,
				'null'      => true,
			])
			->save();
	}
}
