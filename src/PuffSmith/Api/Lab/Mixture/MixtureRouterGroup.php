<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Mixture\Endpoint\ActiveEndpoint;
use PuffSmith\Api\Lab\Mixture\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Mixture\Endpoint\MixtureEndpoint;
use PuffSmith\Api\Lab\Mixture\Endpoint\MixturesEndpoint;
use PuffSmith\Api\Lab\Mixture\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class MixtureRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			ActiveEndpoint::class,
			CreateEndpoint::class,
			MixtureEndpoint::class,
			MixturesEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
