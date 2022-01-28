<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildResistanceOptional extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->changeColumn('ohm', 'float', ['null' => true])
			->save();
	}
}
