<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Vape\Comment\CommentRouterGroup;
use PuffSmith\Api\Lab\Vape\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Vape\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Vape\Endpoint\PatchEndpoint;
use PuffSmith\Api\Lab\Vape\Endpoint\RateEndpoint;
use PuffSmith\Api\Lab\Vape\Endpoint\VapeEndpoint;
use PuffSmith\Api\Lab\Vape\Endpoint\VapesEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class VapeRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
			RateEndpoint::class,
			VapeEndpoint::class,
			VapesEndpoint::class,
		], [
			CommentRouterGroup::class,
		]);
	}
}
