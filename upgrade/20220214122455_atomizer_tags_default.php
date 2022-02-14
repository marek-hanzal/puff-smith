<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class AtomizerTagsDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_atomizer_tag')
			->addUuidForeignColumn('atomizer', 'z_atomizer')
			->addUuidForeignColumn('tag', 'z_tag')
			->save();
	}
}
