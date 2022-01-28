<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildGlow extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->addColumn('glow', 'integer', [
				'comment' => 'How fast a build glows up (fires up).',
				'null'    => true,
			])
			->save();
	}
}
