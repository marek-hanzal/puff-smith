<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Vape;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Build\Vape\Endpoint\RatingEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class VapeRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			RatingEndpoint::class,
		]);
	}
}
