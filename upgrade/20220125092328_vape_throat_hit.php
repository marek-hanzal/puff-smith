<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeThroatHit extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->addColumn('throathit', 'integer', [
				'comment' => 'Rating of throat hit (of nicotine); highest values means uncomfortable vape',
				'null'    => true,
			])
			->save();
	}
}
