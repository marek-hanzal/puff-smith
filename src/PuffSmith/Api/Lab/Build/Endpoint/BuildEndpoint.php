<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

/**
 * @query buildId
 */
class BuildEndpoint extends AbstractFetchEndpoint {
	use BuildRepositoryTrait;
	use BuildMapperTrait;

	public function get(): BuildDto {
		return $this->buildMapper->item($this->buildRepository->find($this->param('buildId')));
	}
}
