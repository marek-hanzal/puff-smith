<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Config\ClientConfigServiceTrait;
use PuffSmith\Config\Dto\ClientConfigDto;

/**
 * @description Provides access to the client side configuration.
 * @link        /client.json
 */
class ClientConfigEndpoint extends AbstractFetchEndpoint {
	use ClientConfigServiceTrait;

	public function get(): ClientConfigDto {
		return $this->clientConfigService->config();
	}
}
