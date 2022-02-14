<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildTagsDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_build_tag')
			->addUuidForeignColumn('build', 'z_build')
			->addUuidForeignColumn('tag', 'z_tag')
			->save();
	}
}
