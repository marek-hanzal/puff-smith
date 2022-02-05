<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeCloudsOptional extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->changeColumn('clouds', 'integer', ['null' => true])
			->save();
	}
}
