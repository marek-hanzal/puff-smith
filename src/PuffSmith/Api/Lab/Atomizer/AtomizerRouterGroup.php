<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Atomizer\Endpoint\AtomizersEndpoint;
use PuffSmith\Api\Lab\Atomizer\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class AtomizerRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			AtomizersEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
