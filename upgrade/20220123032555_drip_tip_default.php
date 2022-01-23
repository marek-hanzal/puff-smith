<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class DripTipDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_driptip', ['comment' => 'Even drip tips are important.'])
			->addStringColumn('code', 128, ['comment' => 'Human rememberable code for driptip.'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'Who owns this driptip?'])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Driptip vendor.'])
			->addUniqueIndex([
				'code',
				'user_id',
			], 'code')
			->save();

		$this
			->createUuidTable('z_driptip_material', ['comment' => 'Relation between drip tip and it\'s materials'])
			->addUuidForeignColumn('driptip', 'z_driptip')
			->addUuidForeignColumn('material', 'z_tag')
			->save();
	}
}