<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cell;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Cell\Endpoint\CellEndpoint;
use PuffSmith\Api\Lab\Cell\Endpoint\CellsEndpoint;
use PuffSmith\Api\Lab\Cell\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Cell\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Cell\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CellRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CellEndpoint::class,
			CellsEndpoint::class,
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
