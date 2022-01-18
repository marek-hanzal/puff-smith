<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root;

use Edde\Api\Root\Sdk\SdkRouterGroup;
use Edde\Api\Root\Upgrade\UpgradeRouterGroup;
use Edde\Http\AbstractRouterGroup;
use Slim\Interfaces\RouteCollectorProxyInterface;

class RootRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [], [
			SdkRouterGroup::class,
			UpgradeRouterGroup::class,
		]);
	}
}
