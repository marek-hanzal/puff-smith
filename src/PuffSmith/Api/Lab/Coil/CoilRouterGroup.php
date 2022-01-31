<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Coil\Endpoint\CoilEndpoint;
use PuffSmith\Api\Lab\Coil\Endpoint\CoilsEndpoint;
use PuffSmith\Api\Lab\Coil\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Coil\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Coil\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CoilRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CoilEndpoint::class,
			CoilsEndpoint::class,
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
