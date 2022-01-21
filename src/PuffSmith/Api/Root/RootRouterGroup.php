<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root;

use Edde\Api\Root\Cache\CacheRouterGroup;
use Edde\Api\Root\Config\ConfigRouterGroup;
use Edde\Api\Root\Job\JobRouterGroup;
use Edde\Api\Root\Log\LogRouterGroup;
use Edde\Api\Root\Profiler\ProfilerRouterGroup;
use Edde\Api\Root\Sdk\SdkRouterGroup;
use Edde\Api\Root\Upgrade\UpgradeRouterGroup;
use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Root\User\UserRouterGroup;
use Slim\Interfaces\RouteCollectorProxyInterface;

class RootRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [], [
			ConfigRouterGroup::class,
			CacheRouterGroup::class,
			JobRouterGroup::class,
			LogRouterGroup::class,
			ProfilerRouterGroup::class,
			SdkRouterGroup::class,
			UpgradeRouterGroup::class,
			UserRouterGroup::class,
		]);
	}
}
