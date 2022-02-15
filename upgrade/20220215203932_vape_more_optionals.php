<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeMoreOptionals extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->changeColumn('dryhit', 'integer', ['null' => true])
			->changeColumn('leaks', 'integer', ['null' => true])
			->changeColumn('airflow', 'integer', ['null' => true])
			->save();
	}
}
