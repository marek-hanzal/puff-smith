<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureComment extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_mixture_comment', ['comment' => 'Comments for mixtures'])
			->addUuidForeignColumn('mixture', 'z_mixture')
			->addUuidForeignColumn('comment', 'z_comment')
			->save();
	}
}
