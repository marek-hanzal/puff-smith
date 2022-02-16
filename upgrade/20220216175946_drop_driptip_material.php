<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DropDriptipMaterial extends CommonMigration {
	public function change(): void {
		$this->drop('z_driptip_material');
	}
}
