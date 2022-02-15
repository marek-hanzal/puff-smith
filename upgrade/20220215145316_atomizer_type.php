<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class AtomizerType extends CommonMigration {
	public function change(): void {
		$this
			->table('z_atomizer')
			->addUuidForeignColumn('type', 'z_tag', ['null' => true])
			->save();
	}
}
