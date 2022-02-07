<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class AtomizerComment extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_atomizer_comment', ['comment' => 'Comments for atomizers'])
			->addUuidForeignColumn('atomizer', 'z_atomizer')
			->addUuidForeignColumn('comment', 'z_comment')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/translations.xlsx');
	}
}
