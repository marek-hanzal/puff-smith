<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildActive extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->addColumn('active', 'boolean', [
				'comment' => 'Is the given build active?',
				'default' => true,
			])
			->save();
	}
}
