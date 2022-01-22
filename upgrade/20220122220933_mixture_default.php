<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class MixtureDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_booster', ['comment' => 'Nicotine booster for mixtures.'])
			->addStringColumn('name', 128, ['comment' => 'Name of a booster (from vendor).'])
			->addColumn('nicotine', 'integer', ['comment' => 'Nicotine amount in mg.'])
			->addColumn('volume', 'integer', ['comment' => 'Amount of booster (typically 10ml).'])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Vendor of a booster.'])
			->save();

		$this
			->createUuidTable('z_base', ['comment' => 'Base for liquids (PG/VG mixture).'])
			->addStringColumn('name', 128, ['comment' => 'Name of a base (from vendor).'])
			->addColumn('pg', 'integer', ['comment' => 'PG percentage'])
			->addColumn('vg', 'integer', ['comment' => 'VG percentage'])
			->addUuidForeignColumn('vendor', 'z_vendor', ['comment' => 'Vendor of a base.'])
			->addUniqueIndex([
				'name',
				'vendor_id',
			], 'name')
			->save();

		$this
			->createUuidTable('z_mixture', ['comment' => 'Mixtures are mixed liquids prepared for vape.'])
			->addStringColumn('name', 128, ['comment' => 'Name of a mixture, just for later reference.'])
			->addStringColumn('code', 64, ['comment' => 'Mixture code; if empty, one should be generated.'])
			->addColumn('steep', 'integer', ['comment' => 'Number of days of steeping.'])
			->addColumn('pg', 'integer', ['comment' => 'Amount of PG (percentage).'])
			->addColumn('vg', 'integer', ['comment' => 'Amount of VG (percentage).'])
			->addColumn('nicotine', 'integer', ['comment' => 'Amount of nicotine (mg).'])
			->addColumn('volume', 'double', ['comment' => 'An (target) amount of the mixture in ml.'])
			->addColumn('mixed', 'double', ['comment' => 'Date of the mixing (start date); microtime.'])
			->addColumn('expires', 'double', [
				'comment' => 'Expiration date (microtime) if known.',
				'null'    => true,
			])
			->addUuidForeignColumn('liquid', 'z_liquid', ['comment' => 'Source liquid; could be just a juice or one already finished.'])
			->addUuidForeignColumn('booster', 'z_booster', [
				'comment' => 'Used booster (if any).',
				'null'    => true,
			])
			->addUuidForeignColumn('base', 'z_base', [
				'comment' => 'Used base (if any).',
				'null'    => true,
			])
			->save();

		$this->importExcel(__DIR__ . '/fixtures/boosters.xlsx');
	}
}
