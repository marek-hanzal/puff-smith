<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class UserEmailUnique extends CommonMigration {
	public function change(): void {
		$this
			->table('z_user')
			->addUniqueIndex(['email'], 'email')
			->save();
	}
}
