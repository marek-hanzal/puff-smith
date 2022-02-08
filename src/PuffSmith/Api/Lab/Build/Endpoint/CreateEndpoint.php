<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Dto\CreateDto;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use BuildRepositoryTrait;
	use BuildMapperTrait;

	public function post(CreateDto $createDto): BuildDto {
		return $this->buildMapper->item($this->buildRepository->create($createDto));
	}
}
