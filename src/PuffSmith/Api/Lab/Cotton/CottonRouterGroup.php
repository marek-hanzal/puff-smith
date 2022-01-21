<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Cotton\Endpoint\CottonsEndpoint;
use PuffSmith\Api\Lab\Cotton\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CottonRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CottonsEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
