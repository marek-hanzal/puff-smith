<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Wire\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Wire\Endpoint\WiresEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class WireRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			WiresEndpoint::class,
		]);
	}
}
