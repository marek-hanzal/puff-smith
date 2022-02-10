<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DropLogTag extends CommonMigration {
	public function change(): void {
		$this->drop('z_log_tag');
	}
}
