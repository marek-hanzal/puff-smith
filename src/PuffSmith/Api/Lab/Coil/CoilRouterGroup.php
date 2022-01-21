<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Coil\Endpoint\CoilsEndpoint;
use PuffSmith\Api\Lab\Coil\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CoilRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CoilsEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
