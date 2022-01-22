<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Booster;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Booster\Endpoint\BoostersEndpoint;
use PuffSmith\Api\Lab\Booster\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class BoosterRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			BoostersEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
