<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Updater\UpdaterJobServiceTrait;

final class CoilNominalOhm extends CommonMigration {
	use UpdaterJobServiceTrait;

	public function change(): void {
		$this
			->table('z_coil')
			->addColumn('nominalOhm', 'decimal', [
				'comment'   => 'Nominal ohm is per wrap on 1.0 size',
				'precision' => 4,
				'scale'     => 3,
				'null'      => true,
			])
			->save();

		$this->currentUserService->selectBy('upgrade');
		$this->updaterJobService->async();
	}
}
