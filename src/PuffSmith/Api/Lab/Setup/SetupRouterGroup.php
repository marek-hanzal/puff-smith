<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Setup;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Setup\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Setup\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Setup\Endpoint\PatchEndpoint;
use PuffSmith\Api\Lab\Setup\Endpoint\SetupEndpoint;
use PuffSmith\Api\Lab\Setup\Endpoint\SetupsEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class SetupRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
			SetupEndpoint::class,
			SetupsEndpoint::class,
		]);
	}
}
