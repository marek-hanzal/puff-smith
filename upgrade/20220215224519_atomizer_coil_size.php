<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class AtomizerCoilSize extends CommonMigration {
	public function change(): void {
		$this
			->table('z_atomizer')
			->addColumn('coilMin', 'decimal', [
				'comment'   => 'Minimum recommended coil size.',
				'precision' => 3,
				'scale'     => 2,
				'null'      => true,
			])
			->addColumn('coilMax', 'decimal', [
				'comment'   => 'Maximum recommended coil size.',
				'precision' => 3,
				'scale'     => 2,
				'null'      => true,
			])
			->save();
	}
}
