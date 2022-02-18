<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class AtomizerDualCoilFlag extends CommonMigration {
	public function change(): void {
		$this
			->table('z_atomizer')
			->addColumn('dual', 'boolean', [
				'comment' => 'Is an atomizer dual coil?',
				'default' => false,
			])
			->save();
	}
}
