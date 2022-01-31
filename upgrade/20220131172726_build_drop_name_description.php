<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildDropNameDescription extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->removeIndexByName('z_build_name_unique')
			->removeColumn('name')
			->removeColumn('description')
			->save();
	}
}
