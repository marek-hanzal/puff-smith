<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\User\Atomizer\AtomizerRouterGroup;
use Slim\Interfaces\RouteCollectorProxyInterface;

class UserRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [], [
			AtomizerRouterGroup::class,
		]);
	}
}
