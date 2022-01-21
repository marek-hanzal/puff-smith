<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Atomizer\AtomizerRouterGroup;
use PuffSmith\Api\Lab\Build\BuildRouterGroup;
use PuffSmith\Api\Lab\Vendor\VendorRouterGroup;
use Slim\Interfaces\RouteCollectorProxyInterface;

class LabRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [], [
			AtomizerRouterGroup::class,
			BuildRouterGroup::class,
			VendorRouterGroup::class,
		]);
	}
}