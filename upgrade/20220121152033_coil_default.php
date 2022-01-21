<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_coil', ['comment' => 'Table containing coils use later in builds.'])
			->addColumn('wraps', 'integer', ['comment' => 'Number of wraps of this coil; should be same as when placed into build.'])
			->addStringColumn('code', 24, ['comment' => 'Code of a coil; this should be human readable and somehow rememberable as it could be written on a bag with coils.'])
			->addColumn('ohm', 'float', ['comment' => 'Coil resistance measured in an atomizer; this will be used later on for resistance computations and recommendations.'])
			->addUuidForeignColumn('wire', 'z_wire', ['comment' => 'A wire a coils is made of.'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'An user who owns this coil.'])
			->addUniqueIndex([
				'user_id',
				'code',
			], 'code')
			->save();
	}
}
