<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Liquid\Comment\CommentRouterGroup;
use PuffSmith\Api\Lab\Liquid\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Liquid\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Liquid\Endpoint\LiquidEndpoint;
use PuffSmith\Api\Lab\Liquid\Endpoint\LiquidsEndpoint;
use PuffSmith\Api\Lab\Liquid\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class LiquidRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			LiquidEndpoint::class,
			LiquidsEndpoint::class,
			PatchEndpoint::class,
		], [
			CommentRouterGroup::class,
		]);
	}
}
