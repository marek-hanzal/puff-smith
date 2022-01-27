<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use Edde\Storage\StorageTrait;

final class FixDoubleDateTime extends CommonMigration {
	use StorageTrait;

	public function change(): void {
		$this
			->table('z_build')
			->addColumn('t_created', 'datetime', [
				'comment' => 'When a build has been created.',
				'null'    => true,
			])
			->save();

		$source = $this->storage
			->table('z_build')
			->select()
			->execute();
		foreach ($source as $row) {
			$this->storage->table('z_build')->update([
				't_created' => (new DateTime())->setTimestamp((int)$row->created),
			])->where('id', $row->id)->execute();
		}

		$this
			->table('z_build')
			->removeColumn('created')
			->save();

		$this
			->table('z_build')
			->renameColumn('t_created', 'created')
			->changeColumn('created', 'datetime', ['null' => false])
			->save();
	}
}
