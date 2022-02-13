<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\User\Dto\Atomizer\DeleteDto;
use PuffSmith\User\Dto\Atomizer\UserAtomizerDto;
use PuffSmith\User\Mapper\Atomizer\UserAtomizerMapperTrait;
use PuffSmith\User\Repository\Atomizer\UserAtomizerRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use UserAtomizerRepositoryTrait;
	use UserAtomizerMapperTrait;

	public function post(DeleteDto $deleteDto): UserAtomizerDto {
		return $this->userAtomizerMapper->item($this->userAtomizerRepository->delete($deleteDto->id));
	}
}
