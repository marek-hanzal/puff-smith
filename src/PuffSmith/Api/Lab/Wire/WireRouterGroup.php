<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Cotton\Endpoint\PatchEndpoint;
use PuffSmith\Api\Lab\Wire\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Wire\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Wire\Endpoint\WireEndpoint;
use PuffSmith\Api\Lab\Wire\Endpoint\WiresEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class WireRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
			WireEndpoint::class,
			WiresEndpoint::class,
		]);
	}
}
