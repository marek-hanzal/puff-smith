<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureMixedDateTime extends CommonMigration {
	public function change(): void {
		$this
			->table('z_mixture')
			->changeColumn('mixed', 'datetime')
			->save();
	}
}
