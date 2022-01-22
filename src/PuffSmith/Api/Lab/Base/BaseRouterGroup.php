<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Base;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Base\Endpoint\BasesEndpoint;
use PuffSmith\Api\Lab\Base\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class BaseRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			BasesEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
