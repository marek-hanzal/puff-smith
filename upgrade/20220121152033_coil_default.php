<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_coil', ['comment' => 'Table containing coils use later in builds.'])
			->addColumn('wraps', 'integer', ['comment' => 'Number of wraps of this coil; should be same as when placed into build.'])
			->addColumn('ohm', 'float', ['comment' => 'Coil resistance measured in an atomizer; this will be used later on for resistance computations and recommendations.'])
			->addUuidForeignColumn('wire', 'z_wire', ['comment' => 'A wire a coils is made of.'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'An user who owns this coil.'])
			->save();
	}
}
