<?php

use Edde\Phinx\CommonMigration;

return [
	'paths'                => [
		'migrations' => '%%PHINX_CONFIG_DIR%%/upgrade',
	],
	'migration_base_class' => CommonMigration::class,
	'environments'         => [
		'default_migration_table' => 'migrations',
		'default_environment'     => $_ENV['PHINX'] ?? 'docker',
		'docker'                  => [
			'adapter' => 'mysql',
			'host'    => 'mariadb',
			'name'    => 'puff-smith',
			'user'    => 'puff-smith',
			'pass'    => '1234',
			'port'    => '3306',
			'charset' => 'utf8',
		],
		'local'                   => [
			'adapter' => 'mysql',
			'host'    => 'mariadb-local',
			'name'    => 'puff-smith',
			'user'    => 'puff-smith',
			'pass'    => '1234',
			'port'    => '3306',
			'charset' => 'utf8',
		],
	],
	'version_order'        => 'creation',
];
