<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Rest\Endpoint\AbstractMutationEndpoint;
use PuffSmith\Api\Lab\Build\Dto\ActiveDto;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

class ActiveEndpoint extends AbstractMutationEndpoint {
	use BuildRepositoryTrait;
	use BuildMapperTrait;

	public function post(ActiveDto $activeDto): BuildDto {
		return $this->buildMapper->item($this->buildRepository->active($activeDto->id, $activeDto->active));
	}
}
