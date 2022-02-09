<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CoilSpaced extends CommonMigration {
	public function change(): void {
		$this
			->table('z_coil')
			->addColumn('spaced', 'boolean', [
				'comment' => 'Is the coil spaced?',
				'default' => false,
			])
			->save();
	}
}
