<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class SetupDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_setup', ['comment' => 'Setup is combination of hardware use for vape.'])
			->addStringColumn('name', 128, ['comment' => 'Name for reference in vapes.'])
			->addStringColumn('description', 512, [
				'comment' => 'Optional description of this setup.',
				'null'    => true,
			])
			->addUuidForeignColumn('build', 'z_build', ['comment' => 'Build (there is also atomizer and so).'])
			->addUuidForeignColumn('mod', 'z_mod', ['comment' => 'Device a build is running on.'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'Owner of this setup.'])
			->addColumn('created', 'datetime', ['comment' => 'Creation time of a setup, just for order'])
			->addUniqueIndex([
				'name',
				'user_id',
			], 'name')
			->save();
	}
}
