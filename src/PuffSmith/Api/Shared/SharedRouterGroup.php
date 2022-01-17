<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared;

use Edde\Http\AbstractRouterGroup;
use Edde\User\Api\UserRouterGroup;
use PuffSmith\Api\Shared\Endpoint\ClientConfigEndpoint;
use PuffSmith\Api\Shared\Endpoint\DateFormatListEndpoint;
use PuffSmith\Api\Shared\Endpoint\DateTimeFormatListEndpoint;
use PuffSmith\Api\Shared\Endpoint\DiscoveryEndpoint;
use PuffSmith\Api\Shared\Endpoint\LanguageListEndpoint;
use PuffSmith\Api\Shared\Endpoint\TranslationEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class SharedRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			ClientConfigEndpoint::class,
			DateFormatListEndpoint::class,
			DateTimeFormatListEndpoint::class,
			DiscoveryEndpoint::class,
			LanguageListEndpoint::class,
			TranslationEndpoint::class,
		], [
			UserRouterGroup::class,
		]);
	}
}
