<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CottonDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_cotton', ['comment' => 'Table of cottons usable in builds.'])
			->addStringColumn('name', 128, [
				'comment' => 'Name of a cotton.',
				'unique'  => true,
			])
			->addStringColumn('description', 512, [
				'comment' => 'Cotton description, if needed.',
				'null'    => true,
			])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Who crafted this beautiful piece of cotton.'])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/cottons.xlsx');
	}
}
