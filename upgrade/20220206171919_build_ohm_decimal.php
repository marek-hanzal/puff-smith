<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

final class BuildOhmDecimal extends CommonMigration {
	use BuildRepositoryTrait;

	public function change(): void {
		$this
			->table('z_build')
			->removeColumn('ohm')
			->save();

		$this
			->table('z_build')
			->addColumn('ohm', 'decimal', [
				'null'      => true,
				'precision' => 10,
				'scale'     => 3,
			])
			->save();
	}
}
