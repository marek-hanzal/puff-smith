<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildDualCoil extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->removeColumn('coils')
			->addColumn('dual', 'boolean', [
				'comment' => 'Is a build dual coil?',
				'default' => false,
			])
			->addColumn('dualMode', 'integer', [
				'comment' => '1 - serial/2 - parallel',
				'null'    => true,
			])
			->save();
	}
}
