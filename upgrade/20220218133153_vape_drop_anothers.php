<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeDropAnothers extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->removeColumn('dryhit')
			->removeColumn('leaks')
			->removeColumn('mtl')
			->removeColumn('dl')
			->removeColumn('clouds')
			->save();
	}
}
