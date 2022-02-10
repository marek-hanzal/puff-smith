<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class LogTagColumn extends CommonMigration {
	public function change(): void {
		$this
			->table('z_log')
			->addStringColumn('tags', 256, [
				'comment' => 'Comma separated log tags.',
				'null'    => true,
			])
			->save();
	}
}
