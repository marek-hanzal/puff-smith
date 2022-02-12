<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Mod\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Mod\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Mod\Endpoint\ModEndpoint;
use PuffSmith\Api\Lab\Mod\Endpoint\ModsEndpoint;
use PuffSmith\Api\Lab\Mod\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class ModRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			ModEndpoint::class,
			ModsEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
