<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;

/**
 * @query atomizerId
 */
class AtomizerEndpoint extends AbstractFetchEndpoint {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;

	public function get(): AtomizerDto {
		return $this->atomizerMapper->item($this->atomizerRepository->find($this->param('atomizerId')));
	}
}
