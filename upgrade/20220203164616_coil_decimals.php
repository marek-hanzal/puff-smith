<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilDecimals extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->changeColumn('ohm', 'decimal', [
				'precision' => 10,
				'scale'     => 3,
			])
			->save();
	}
}
