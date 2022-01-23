<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab;

use Edde\Http\AbstractRouterGroup;
use PuffSmith\Api\Lab\Atomizer\AtomizerRouterGroup;
use PuffSmith\Api\Lab\Base\BaseRouterGroup;
use PuffSmith\Api\Lab\Booster\BoosterRouterGroup;
use PuffSmith\Api\Lab\Build\BuildRouterGroup;
use PuffSmith\Api\Lab\Coil\CoilRouterGroup;
use PuffSmith\Api\Lab\Cotton\CottonRouterGroup;
use PuffSmith\Api\Lab\Driptip\DriptipRouterGroup;
use PuffSmith\Api\Lab\Liquid\LiquidRouterGroup;
use PuffSmith\Api\Lab\Mixture\MixtureRouterGroup;
use PuffSmith\Api\Lab\Mod\ModRouterGroup;
use PuffSmith\Api\Lab\Setup\SetupRouterGroup;
use PuffSmith\Api\Lab\Vendor\VendorRouterGroup;
use PuffSmith\Api\Lab\Wire\WireRouterGroup;
use Slim\Interfaces\RouteCollectorProxyInterface;

class LabRouterGroup extends AbstractRouterGroup {
	public function register(RouteCollectorProxyInterface $routeCollectorProxy) {
		$this->endpoints($routeCollectorProxy, [], [
			AtomizerRouterGroup::class,
			BaseRouterGroup::class,
			BoosterRouterGroup::class,
			BuildRouterGroup::class,
			CoilRouterGroup::class,
			CottonRouterGroup::class,
			DriptipRouterGroup::class,
			LiquidRouterGroup::class,
			MixtureRouterGroup::class,
			ModRouterGroup::class,
			SetupRouterGroup::class,
			VendorRouterGroup::class,
			WireRouterGroup::class,
		]);
	}
}
