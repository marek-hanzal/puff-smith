<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class SetupDropNameDescription extends CommonMigration {
	public function change(): void {
		$this
			->table('z_setup')
			->removeIndexByName('z_setup_name_unique')
			->removeColumn('name')
			->removeColumn('description')
			->save();
	}
}
