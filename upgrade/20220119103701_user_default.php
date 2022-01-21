<?php
declare(strict_types=1);

use Edde\Password\PasswordServiceTrait;
use Edde\Phinx\CommonMigration;

final class UserDefault extends CommonMigration {
	use PasswordServiceTrait;

	public function change(): void {
		$this
			->createUuidTable('z_user', ['comment' => 'What to say - table with users, yaaay!'])
			->addStringColumn('name', 256, ['comment' => 'Arbitrary display name of an user.'])
			->addStringColumn('email', 256, ['comment' => 'Primary email of an user, also used as a login.'])
			->addStringColumn('password', 256, [
				'comment' => 'Hashed password of an user.',
				'null'    => true,
			])
			->addStringColumn('site', 32, ['comment' => 'Primary site an user belongs to.'])
			->addStringColumn('settings', 2048, [
				'comment' => 'Optional settings for the user (like language and so).',
				'null'    => true,
			])
			->save();
		$this->ensureData('z_user', [
			[
				'name'     => 'root',
				'email'    => 'root',
				'password' => $this->passwordService->hash('1234'),
				'site'     => 'root',
			],
			[
				'name'  => 'upgrade',
				'email' => 'upgrade',
				'site'  => 'root',
			],
		]);
	}
}
