<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Mixture\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Mixture\Endpoint\MixturesEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class MixtureRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			MixturesEndpoint::class,
		]);
	}
}
