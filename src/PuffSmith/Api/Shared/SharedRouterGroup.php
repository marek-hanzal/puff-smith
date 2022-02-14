<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared;

use Edde\Api\Shared\Endpoint\ClientConfigEndpoint;
use Edde\Api\Shared\Endpoint\DateFormatListEndpoint;
use Edde\Api\Shared\Endpoint\DateTimeFormatListEndpoint;
use Edde\Api\Shared\Endpoint\DiscoveryEndpoint;
use Edde\Api\Shared\Endpoint\LanguageListEndpoint;
use Edde\Api\Shared\Endpoint\TranslationEndpoint;
use Edde\Api\Shared\File\FileRouterGroup;
use Edde\Api\Shared\Image\ImageRouterGroup;
use Edde\Api\Shared\Import\ImportRouterGroup;
use Edde\Api\Shared\Job\JobRouterGroup;
use Edde\Api\Shared\Tag\TagRouterGroup;
use Edde\Api\Shared\User\UserRouterGroup as EddeUserRouterGroup;
use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Shared\User\UserRouterGroup;
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
			FileRouterGroup::class,
			ImportRouterGroup::class,
			ImageRouterGroup::class,
			JobRouterGroup::class,
			EddeUserRouterGroup::class,
			TagRouterGroup::class,
			UserRouterGroup::class,
		]);
	}
}
