<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildComment extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_build_comment', ['comment' => 'Comments for builds'])
			->addUuidForeignColumn('build', 'z_build')
			->addUuidForeignColumn('comment', 'z_comment')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/translations.xlsx');
	}
}
