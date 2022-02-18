<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeDropTaste extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->removeColumn('taste')
			->save();
	}
}
