<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DropSetup extends CommonMigration {
	public function change(): void {
		$this->drop('z_setup');
	}
}
