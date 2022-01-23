<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class CommentDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_comment', ['comment' => 'Comments for various things'])
			->addUuidForeignColumn('user', 'z_user')
			->addColumn('stamp', 'datetime')
			->addTextColumn('comment')
			->save();

		$this
			->createUuidTable('z_comment_tag', ['comment' => 'Add ability to filter comments by tags'])
			->addUuidForeignColumn('comment', 'z_comment')
			->addUuidForeignColumn('tag', 'z_tag')
			->save();

		$this
			->createUuidTable('z_vape_comment', ['comment' => 'Comments for vapes'])
			->addUuidForeignColumn('vape', 'z_vape')
			->addUuidForeignColumn('comment', 'z_comment')
			->save();
	}
}
