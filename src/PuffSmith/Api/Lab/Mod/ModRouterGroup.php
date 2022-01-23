<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Mod\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Mod\Endpoint\ModsEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class ModRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			ModsEndpoint::class,
		]);
	}
}
