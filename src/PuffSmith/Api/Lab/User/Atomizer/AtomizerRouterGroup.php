<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User\Atomizer;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\User\Atomizer\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\User\Atomizer\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\User\Atomizer\Endpoint\PatchEndpoint;
use PuffSmith\Api\Lab\User\Atomizer\Endpoint\UserAtomizerEndpoint;
use PuffSmith\Api\Lab\User\Atomizer\Endpoint\UserAtomizersEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class AtomizerRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
			UserAtomizerEndpoint::class,
			UserAtomizersEndpoint::class,
		]);
	}
}
