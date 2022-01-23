<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Vape\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Vape\Endpoint\VapesEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class VapeRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			VapesEndpoint::class,
		]);
	}
}
