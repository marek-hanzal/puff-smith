<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared\User;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Shared\User\Endpoint\SignUpEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class UserRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			SignUpEndpoint::class,
		]);
	}
}
