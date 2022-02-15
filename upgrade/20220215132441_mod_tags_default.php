<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class ModTagsDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_mod_tag')
			->addUuidForeignColumn('mod', 'z_mod')
			->addUuidForeignColumn('tag', 'z_tag')
			->save();
	}
}
