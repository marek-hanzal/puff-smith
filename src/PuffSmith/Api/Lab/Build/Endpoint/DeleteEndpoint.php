<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Dto\DeleteDto;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use BuildRepositoryTrait;
	use BuildMapperTrait;

	public function post(DeleteDto $deleteDto): BuildDto {
		return $this->buildMapper->item($this->buildRepository->delete($deleteDto->id));
	}
}
