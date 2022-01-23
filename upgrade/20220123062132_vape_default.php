<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_vape', ['comment' => 'Vape is record of the vaping experience based on various variables and the build'])
			->addColumn('stamp', 'datetime', ['comment' => 'Timestamp of this vaping experience'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'Owner of this vaping experience'])
			->save();
	}
}
