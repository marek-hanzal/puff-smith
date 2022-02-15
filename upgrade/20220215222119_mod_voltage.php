<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class ModVoltage extends CommonMigration {
	public function change(): void {
		$this
			->table('z_mod')
			->addColumn('voltage', 'decimal', [
				'comment'   => 'Working voltage of a mod; this is useful for mech mods to properly compute power for coils.',
				'precision' => 10,
				'scale'     => 1,
				'null'      => true,
			])
			->save();
	}
}
