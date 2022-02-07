<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Atomizer\Endpoint\AtomizerEndpoint;
use PuffSmith\Api\Lab\Atomizer\Endpoint\AtomizersEndpoint;
use PuffSmith\Api\Lab\Atomizer\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Atomizer\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Atomizer\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class AtomizerRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			AtomizerEndpoint::class,
			AtomizersEndpoint::class,
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
