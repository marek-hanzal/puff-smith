<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildMod extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->addUuidForeignColumn('mod', 'z_mod', [
				'comment' => 'Default mod of this build.',
				'null'    => true,
			])
			->save();
	}
}
