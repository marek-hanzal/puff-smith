<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vendor;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Vendor\Endpoint\CreateEndpoint;
use PuffSmith\Api\Lab\Vendor\Endpoint\DeleteEndpoint;
use PuffSmith\Api\Lab\Vendor\Endpoint\PatchEndpoint;
use PuffSmith\Api\Lab\Vendor\Endpoint\VendorEndpoint;
use PuffSmith\Api\Lab\Vendor\Endpoint\VendorsEndpoint;
use Slim\Interfaces\RouteCollectorProxyInterface;

class VendorRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [
			CreateEndpoint::class,
			DeleteEndpoint::class,
			PatchEndpoint::class,
			VendorEndpoint::class,
			VendorsEndpoint::class,
		]);
	}
}
