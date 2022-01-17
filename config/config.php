<?php

use Edde\Api\ApiRouter;
use Edde\Storage\StorageConfig;

/**
 * To keep things de-deduplicated, it's better to lead Phinx config here (thus we confirm single source of truth).
 */

$phinx = (require __DIR__ . '/phinx.php');
$database = $phinx['environments'][$phinx['environments']['default_environment']];

return [
	StorageConfig::CONFIG_STORAGE   => [
		'driver'   => 'pdo',
		'dsn'      => sprintf('mysql:host=%s;dbname=%s;charset=utf8', $database['host'], $database['name']),
		'user'     => $database['user'],
		'password' => $database['pass'],
	],
	SessionResolver::CONFIG_SESSION => [
		'cache_expire' => 0,
	],
	'deployment'                    => [
		/**
		 * Deployment commit timeout.
		 */
		'timeout' => 5,
	],
	ApiRouter::CONFIG_ENDPOINTS     => [
	],
	ApiRouter::CONFIG_GROUPS        => [
	],
];
