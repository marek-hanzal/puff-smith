<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureDropNameUnique extends CommonMigration {
	public function change(): void {
		$this
			->table('z_mixture')
			->removeIndex([
				'name',
				'user_id',
			])
			->save();
	}
}
