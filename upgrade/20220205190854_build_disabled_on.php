<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

final class BuildDisabledOn extends CommonMigration {
	use BuildRepositoryTrait;

	public function change(): void {
		$this
			->table('z_build')
			->addColumn('disabledOn', 'datetime', [
				'comment' => 'When a build has been disabled.',
				'null'    => true,
			])
			->save();

		foreach ($this->buildRepository->all() as $build) {
			$this->buildRepository->change([
				'id'         => $build->id,
				'disabledOn' => $build->active ? null : new DateTime(),
			]);
		}
	}
}
