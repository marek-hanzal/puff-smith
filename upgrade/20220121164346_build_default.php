<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_build', ['comment' => 'Table with user builds. This is almost the most interesting part of the app.'])
			->addStringColumn('name', 128, ['comment' => 'Human readable build name; it will be later user to select it for vape experience.'])
			->addUuidForeignColumn('atomizer', 'z_atomizer', ['comment' => 'Used atomizer.'])
			->addUuidForeignColumn('coil', 'z_coil', ['comment' => 'Used coil.'])
			->addUuidForeignColumn('cotton', 'z_cotton', ['comment' => 'Used cotton.'])
			->addColumn('coils', 'integer', [
				'comment' => 'Number of coils.',
				'default' => 1,
			])
			->addColumn('coilOffset', 'integer', [
				'comment' => 'Relative coil offset related to airflow intake; this could help to optimize taste; 0 is "ground" level of the airflow (middle); positives goes up, negatives down',
				'default' => 0,
			])
			->addColumn('cottonOffset', 'integer', [
				'comment' => 'Relative cotton payload; 0 means "optimal" fit into a coil; positives means a bit more cotton, negatives a bit less.',
				'default' => 0,
			])
			->addColumn('ohm', 'float', ['comment' => 'Resistance of this build (total resistance, including multi-coil builds).'])
			->addStringColumn('description', 512, [
				'comment' => 'Optional description of this build, like coil positions or so.',
				'null'    => true,
			])
			->addColumn('created', 'double', ['comment' => 'Microtime - time of the build.'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'Owner of the build.'])
			->addUniqueIndex([
				'name',
				'user_id',
			], 'name')
			->save();
	}
}
