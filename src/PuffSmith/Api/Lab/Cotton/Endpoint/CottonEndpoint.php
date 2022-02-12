<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;

/**
 * @query cottonId
 */
class CottonEndpoint extends AbstractFetchEndpoint {
	use CottonRepositoryTrait;
	use CottonMapperTrait;

	public function get(): CottonDto {
		return $this->cottonMapper->item($this->cottonRepository->find($this->param('cottonId')));
	}
}
