<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class BuildRating extends CommonMigration {
	public function change(): void {
		$this
			->table('z_build')
			->addColumn('rating', 'integer', [
				'comment' => 'Build rating.',
				'null'    => true,
			])
			->save();
	}
}
