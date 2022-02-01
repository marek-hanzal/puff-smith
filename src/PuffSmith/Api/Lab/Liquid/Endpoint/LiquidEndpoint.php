<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Liquid\Dto\LiquidDto;
use PuffSmith\Liquid\Mapper\LiquidMapperTrait;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;

/**
 * @query liquidId
 */
class LiquidEndpoint extends AbstractFetchEndpoint {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;

	public function get(): LiquidDto {
		return $this->liquidMapper->item($this->liquidRepository->find($this->param('liquidId')));
	}
}
