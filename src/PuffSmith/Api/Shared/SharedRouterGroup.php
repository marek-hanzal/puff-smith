<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared;

use Edde\Api\Shared\Endpoint\ClientConfigEndpoint;
use Edde\Api\Shared\Endpoint\DateFormatListEndpoint;
use Edde\Api\Shared\Endpoint\DateTimeFormatListEndpoint;
use Edde\Api\Shared\Endpoint\DiscoveryEndpoint;
use Edde\Api\Shared\Endpoint\LanguageListEndpoint;
use Edde\Api\Shared\Endpoint\TranslationEndpoint;
use Edde\Api\Shared\User\UserRouterGroup;
use Edde\Http\AbstractRouterGroup;
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
