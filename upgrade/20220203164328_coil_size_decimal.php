<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilSizeDecimal extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->changeColumn('size', 'decimal', [
				'default'   => 0.3,
				'precision' => 10,
				'scale'     => 2,
			])
			->save();
	}
}
