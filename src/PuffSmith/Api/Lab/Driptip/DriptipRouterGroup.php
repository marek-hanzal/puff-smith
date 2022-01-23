<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Driptip;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Driptip\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Driptip\Endpoint\DriptipsEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class DriptipRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DriptipsEndpoint::class,
		]);
	}
}
