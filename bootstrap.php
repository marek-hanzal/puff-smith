<?php
declare(strict_types=1);

use Cache\Adapter\Void\VoidCachePool;
use Edde\File\FileService;
use Edde\Http\ILinkFilter;
use Edde\Job\CliJobExecutor;
use Edde\Session\ISessionMapper;
use Edde\Session\SessionResolver;
use Edde\Slim\SlimApp;
use Edde\User\Mapper\ICurrentUserMapper;
use Edde\User\Mapper\IUserMapper;
use Phinx\Config\Config;
use Phinx\Config\ConfigInterface;
use Psr\Container\ContainerInterface;
use Psr\SimpleCache\CacheInterface;
use PuffSmith\Http\LinkFilter;
use PuffSmith\Session\SessionMapper;
use PuffSmith\User\Mapper\CurrentUserMapper;
use PuffSmith\User\Mapper\UserMapper;
use Symfony\Component\HttpFoundation\Session\Session;

require_once __DIR__ . '/vendor/autoload.php';

return SlimApp::create(
	__DIR__ . '/config/config.php',
	[
		CliJobExecutor::CONFIG_CLI_PHP => __DIR__ . '/cli.php',
		Session::class                 => function (ContainerInterface $container) {
			return $container->get(SessionResolver::class)->setup();
		},
		ConfigInterface::class         => function () {
			return Config::fromPhp(__DIR__ . '/phinx.php');
		},
		ILinkFilter::class             => function (ContainerInterface $container) {
			return $container->get(LinkFilter::class);
		},
		IUserMapper::class             => function (ContainerInterface $container) {
			return $container->get(UserMapper::class);
		},
		ICurrentUserMapper::class      => function (ContainerInterface $container) {
			return $container->get(CurrentUserMapper::class);
		},
		ISessionMapper::class          => function (ContainerInterface $container) {
			return $container->get(SessionMapper::class);
		},
		CacheInterface::class          => function () {
			return new VoidCachePool();
		},
		//		CacheInterface::class          => function (ContainerInterface $container) {
		//			return new VoidCachePool();
		//			$memcached = new Memcached();
		//			$memcached->addServers($container->get('memcached'));
		//			return new MemcachedCachePool($memcached);
		//		},
		FileService::CONFIG_ROOT       => __DIR__ . '/.data',
		SlimApp::CONFIG_APP_NAME       => 'Puff Smith',
	]
)->dynamicBasePath('puff-smith');
