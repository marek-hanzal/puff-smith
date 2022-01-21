<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Build\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class BuildRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
		]);
	}
}
