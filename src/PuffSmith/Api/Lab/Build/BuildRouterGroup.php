<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Build\Endpoint\ActiveEndpoint;
use PuffSmith\Api\Lab\Build\Endpoint\BuildEndpoint;
use PuffSmith\Api\Lab\Build\Endpoint\BuildsEndpoint;
use PuffSmith\Api\Lab\Build\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Build\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class BuildRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			ActiveEndpoint::class,
			BuildEndpoint::class,
			BuildsEndpoint::class,
			CreateEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
