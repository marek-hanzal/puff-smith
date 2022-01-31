<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

/**
 * @query coilId
 */
class CoilEndpoint extends AbstractFetchEndpoint {
	use CoilRepositoryTrait;
	use CoilMapperTrait;

	public function get(): CoilDto {
		return $this->coilMapper->item($this->coilRepository->find($this->param('coilId')));
	}
}
