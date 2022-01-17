<?php

use Edde\Api\ApiRouter;
use Edde\Api\Shared\Endpoint\DateFormatListEndpoint;
use Edde\Api\Shared\Endpoint\DateTimeFormatListEndpoint;
use Edde\Session\ISessionResolver;
use Edde\Storage\StorageConfig;
use PuffSmith\Api\Shared\SharedRouterGroup;

/**
 * To keep things de-deduplicated, it's better to lead Phinx config here (thus we confirm single source of truth).
 */

$phinx = (require __DIR__ . '/phinx.php');
$database = $phinx['environments'][$phinx['environments']['default_environment']];

return [
	StorageConfig::CONFIG_STORAGE                        => [
		'driver'   => 'pdo',
		'dsn'      => sprintf('mysql:host=%s;dbname=%s;charset=utf8', $database['host'], $database['name']),
		'user'     => $database['user'],
		'password' => $database['pass'],
	],
	ISessionResolver::CONFIG_SESSION                     => [
		'cache_expire' => 0,
	],
	DateFormatListEndpoint::CONFIG_DATE_FORMATS          => [
		[
			"id"   => "YYYY-mm-dd",
			"code" => "YYYY-mm-dd",
		],
		[
			"id"   => "dd.mm.YYYY",
			"code" => "dd.mm.YYYY",
		],
		[
			"id"   => "LL",
			"code" => "LL",
		],
		[
			"id"   => "LLLL",
			"code" => "LLLL",
		],
	],
	DateTimeFormatListEndpoint::CONFIG_DATE_TIME_FORMATS => [
		[
			"id"   => "YYYY-mm-dd H:i:s",
			"code" => "YYYY-mm-dd H:i:s",
		],
		[
			"id"   => "LLLL",
			"code" => "LLLL",
		],
	],
	ApiRouter::CONFIG_ENDPOINTS                          => [
	],
	ApiRouter::CONFIG_GROUPS                             => [
		SharedRouterGroup::class,
	],
];
