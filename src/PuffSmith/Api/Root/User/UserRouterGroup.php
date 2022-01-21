<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Root\User\Endpoint\CreateEndpoint;
use PuffSmith\Api\Root\User\Endpoint\PatchEndpoint;
use PuffSmith\Api\Root\User\Endpoint\RolesEndpoint;
use PuffSmith\Api\Root\User\Endpoint\SitesEndpoint;
use PuffSmith\Api\Root\User\Endpoint\UserEndpoint;
use PuffSmith\Api\Root\User\Endpoint\UsersEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class UserRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			PatchEndpoint::class,
			RolesEndpoint::class,
			SitesEndpoint::class,
			UserEndpoint::class,
			UsersEndpoint::class,
		]);
	}
}
