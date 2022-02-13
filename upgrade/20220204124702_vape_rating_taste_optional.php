<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeRatingTasteOptional extends CommonMigration {
	public function change(): void {
		$this
			->table('z_vape')
			->changeColumn('rating', 'integer', ['null' => true])
			->changeColumn('taste', 'integer', ['null' => true])
			->save();
	}
}
