<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DropSomeRedundants extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->removeColumn('rating')
			->save();
	}
}
