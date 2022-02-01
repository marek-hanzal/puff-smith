<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureRating extends CommonMigration {
	public function change(): void {
		$this
			->table('z_mixture')
			->addColumn('rating', 'integer', [
				'comment' => 'Mixture rating.',
				'null'    => true,
			])
			->save();
	}
}
