<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use Edde\Tag\Repository\TagRepositoryTrait;

final class UniqueTags extends CommonMigration {
	use TagRepositoryTrait;

	public function change(): void {
		$this->tagRepository
			->table()
			->delete()
			->where('group', 'material')
			->execute();

		$this
			->table('z_tag')
			->addUniqueIndex([
				'code',
				'group',
			], 'code')
			->save();

		$this->importExcel(__DIR__ . '/fixtures/tags.xlsx');
	}
}
