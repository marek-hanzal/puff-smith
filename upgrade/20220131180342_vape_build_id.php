<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use Edde\Storage\StorageTrait;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

final class VapeBuildId extends CommonMigration {
	use VapeRepositoryTrait;
	use StorageTrait;

	public function change(): void {
		$this
			->table('z_vape')
			->addUuidForeignColumn('build', 'z_build', ['null' => true])
			->addUuidForeignColumn('mod', 'z_mod', [
				'comment' => 'Mod used for this vape',
				'null'    => true,
			])
			->save();

		foreach ($this->vapeRepository->all() as $vape) {
			$setup = $this->storage->table('z_setup')->select()->where('id', $vape->setup_id)->execute()->fetch();
			$this->vapeRepository->change([
				'id'       => $vape->id,
				'build_id' => $setup->build_id,
				'mod_id'   => $setup->mod_id,
			]);
		}

		$this
			->table('z_vape')
			->changeColumn('build_id', 'string', [
				'length'    => 36,
				'collation' => 'utf8_unicode_ci',
				'null'      => false,
			])
			->changeColumn('mod_id', 'string', [
				'length'    => 36,
				'collation' => 'utf8_unicode_ci',
				'null'      => false,
			])
			->save();

		$this
			->table('z_vape')
			->dropForeignColumn('setup_id')
			->save();
	}
}
