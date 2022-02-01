<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class LiquidComment extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_liquid_comment', ['comment' => 'Comments for liquids'])
			->addUuidForeignColumn('liquid', 'z_liquid')
			->addUuidForeignColumn('comment', 'z_comment')
			->save();
	}
}
