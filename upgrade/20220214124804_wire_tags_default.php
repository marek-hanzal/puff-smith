<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class WireTagsDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_wire_tag')
			->addUuidForeignColumn('wire', 'z_wire')
			->addUuidForeignColumn('tag', 'z_tag')
			->save();
	}
}
