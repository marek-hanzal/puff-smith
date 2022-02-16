<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class WireTcFlag extends CommonMigration {
	public function change(): void {
		$this
			->table('z_wire')
			->addColumn('tc', 'boolean', [
				'default' => false,
				'comment' => 'Does a wire support TC?',
			])
			->save();
	}
}
