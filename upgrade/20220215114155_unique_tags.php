<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class UniqueTags extends CommonMigration {
	public function change(): void {
		$this
			->table('z_tag')
			->addUniqueIndex([
				'code',
				'group',
			], 'code')
			->save();
	}
}
