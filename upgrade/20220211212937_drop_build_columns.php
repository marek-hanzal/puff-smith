<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DropBuildColumns extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->removeColumn('coilOffset')
			->removeColumn('cottonOffset')
			->removeColumn('glow')
			->save();
	}
}
