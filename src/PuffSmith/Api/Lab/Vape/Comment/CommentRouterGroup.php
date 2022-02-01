<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Comment;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Vape\Comment\Endpoint\CommentsEndpoint;
use PuffSmith\Api\Lab\Vape\Comment\Endpoint\CreateEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CommentRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CommentsEndpoint::class,
			CreateEndpoint::class,
		]);
	}
}
