<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Comment;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Mixture\Comment\Endpoint\CommentsEndpoint;
use PuffSmith\Api\Lab\Mixture\Comment\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CommentRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CommentsEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
