<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

final class CoilUpdate extends CommonMigration {
	use CoilRepositoryTrait;

	public function change(): void {
		$this
			->table('z_coil')
			->dropForeignKey([
				'code',
				'user_id',
			])
			->save();

		$this
			->table('z_coil')
			->removeIndexByName('z_coil_code_unique')
			->save();

		$this
			->table('z_coil')
			->removeColumn('code')
			->addForeignKey('user_id', 'z_user', 'id', ['delete' => 'cascade'])
			->addColumn('stamp', 'datetime', [
				'comment' => 'When a coil has been created.',
				'null'    => true,
			])
			->addUniqueIndex([
				'wraps',
				'ohm',
				'wire_id',
				'user_id',
			], 'z_coil_coil_unique')
			->save();

		foreach ($this->coilRepository->all() as $coil) {
			$this->coilRepository->change([
				'id'    => $coil->id,
				'stamp' => new DateTime(),
			]);
		}

		$this
			->table('z_coil')
			->changeColumn('stamp', 'datetime', ['null' => false])
			->save();
	}
}
