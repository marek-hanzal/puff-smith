<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Liquid\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Liquid\Endpoint\LiquidsEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class LiquidRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			LiquidsEndpoint::class,
		]);
	}
}
