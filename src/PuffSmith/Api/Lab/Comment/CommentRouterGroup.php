<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Comment;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Comment\Endpoint\CommentEndpoint;
use PuffSmith\Api\Lab\Comment\Endpoint\CommentsEndpoint;
use PuffSmith\Api\Lab\Comment\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Comment\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Comment\Endpoint\PatchEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class CommentRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CommentEndpoint::class,
			CommentsEndpoint::class,
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
		]);
	}
}
