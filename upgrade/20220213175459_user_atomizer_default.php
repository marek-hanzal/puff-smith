<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class UserAtomizerDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_user_atomizer', ['comment' => 'Atomizers "purchased" by an user.'])
			->addColumn('stamp', 'datetime', ['comment' => 'When an atomizer has been purchased'])
			->addUuidForeignColumn('driptip', 'z_driptip', [
				'comment' => 'Optional default driptip of an atomizer',
				'null'    => true,
			])
			->addUuidForeignColumn('atomizer', 'z_atomizer', ['comment' => 'Which atomizer...'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => '...belongs to which user'])
			->save();
	}
}
