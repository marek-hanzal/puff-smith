<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use Edde\Phinx\PhinxTable;
use Edde\Tag\Repository\TagRepositoryTrait;

final class UniqueTags extends CommonMigration {
	use TagRepositoryTrait;

	public function change(): void {
		$this->tagRepository
			->table()
			->delete()
			->where('group', 'material')
			->execute();

		$this->tryTable('z_tag', function (PhinxTable $phinxTable) {
			$phinxTable->addUniqueIndex([
				'code',
				'group',
			], 'code');
		});

		$this->importExcel(__DIR__ . '/fixtures/tags.xlsx');
	}
}
