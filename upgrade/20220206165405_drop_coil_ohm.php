<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Build\Repository\BuildRepositoryTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

final class DropCoilOhm extends CommonMigration {
	use BuildRepositoryTrait;
	use CoilRepositoryTrait;

	public function change(): void {
		foreach ($this->buildRepository->all() as $build) {
			$coil = $this->coilRepository->find($build->coil_id);
			$this->buildRepository->change([
				'id'  => $build->id,
				'ohm' => $coil->ohm,
			]);
		}

		$this
			->table('z_coil')
			->dropForeignKey(['wire_id'])
			->dropForeignKey(['user_id'])
			->removeIndexByName('z_coil_coil_unique')
			->removeColumn('ohm')
			->removeColumn('user_id')
			->save();

		$this
			->table('z_coil')
			->addForeignKey('wire_id', 'z_wire', 'id', ['delete' => 'cascade'])
			->addUniqueIndex([
				'wraps',
				'size',
				'wire_id',
			], 'coil')
			->save();
	}
}
