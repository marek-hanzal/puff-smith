<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureDropName extends CommonMigration {
	public function change(): void {
		$this
			->table('z_mixture')
			->removeColumn('name')
			->save();
	}
}
