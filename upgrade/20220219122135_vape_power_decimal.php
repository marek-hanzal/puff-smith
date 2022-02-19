<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapePowerDecimal extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->changeColumn('power', 'decimal', [
				'precision' => 10,
				'scale'     => 2,
				'null'      => true,
			])
			->save();
	}
}
