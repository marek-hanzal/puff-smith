<?php
declare(strict_types=1);

use Edde\File\FileService;
use Edde\Job\CliJobExecutor;
use Edde\Slim\SlimApp;
use Phinx\Config\Config;
use Phinx\Config\ConfigInterface;
use Psr\Container\ContainerInterface;
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
		FileService::CONFIG_ROOT       => __DIR__ . '/.data',
		SlimApp::CONFIG_APP_NAME       => 'Puff Smith',
	]
)->dynamicBasePath('api');
