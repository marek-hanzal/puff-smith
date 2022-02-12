<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Cotton\Endpoint\CottonEndpoint;
use PuffSmith\Api\Lab\Cotton\Endpoint\CottonsEndpoint;
use PuffSmith\Api\Lab\Cotton\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Cotton\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Cotton\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CottonRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CottonEndpoint::class,
			CottonsEndpoint::class,
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
