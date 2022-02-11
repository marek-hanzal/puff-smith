<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildDefaultDriptip extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->addUuidForeignColumn('driptip', 'z_driptip', [
				'comment' => 'Default driptip for this build in case where an atomizer has favourite one.',
				'null'    => true,
			])
			->save();
	}
}
