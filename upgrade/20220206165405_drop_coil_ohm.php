<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Build\Repository\BuildRepositoryTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

final class DropCoilOhm extends CommonMigration {
	use BuildRepositoryTrait;
	use CoilRepositoryTrait;

	public function change(): void {
		foreach ($this->buildRepository->table()->select()->execute() as $build) {
			$coil = $this->coilRepository->find($build->coil_id);
			$this->buildRepository->change([
				'id'  => $build->id,
				'ohm' => $coil->ohm,
			]);
		}

		$table = $this->table('z_coil');
		try {
			$table
				->dropForeignKey(['wire_id'])
				->save();
		} catch (Throwable $exception) {
			$table->reset();
		}
		$table = $this->table('z_coil');
		try {
			$table
				->dropForeignKey(['user_id'])
				->save();
		} catch (Throwable $exception) {
			$table->reset();
		}
		$table = $this->table('z_coil');
		try {
			$table
				->removeIndexByName('z_coil_coil_unique')
				->save();
		} catch (Throwable $exception) {
			$table->reset();
		}
		$table = $this->table('z_coil');
		try {
			$table
				->removeColumn('ohm')
				->save();
		} catch (Throwable $exception) {
			$table->reset();
		}
		$table = $this->table('z_coil');
		try {
			$table
				->removeColumn('user_id')
				->save();
		} catch (Throwable $exception) {
			$table->reset();
		}

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
