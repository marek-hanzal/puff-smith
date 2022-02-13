<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\User\Dto\Atomizer\CreateDto;
use PuffSmith\User\Dto\Atomizer\UserAtomizerDto;
use PuffSmith\User\Mapper\Atomizer\UserAtomizerMapperTrait;
use PuffSmith\User\Repository\Atomizer\UserAtomizerRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use UserAtomizerRepositoryTrait;
	use UserAtomizerMapperTrait;

	public function post(CreateDto $createDto): UserAtomizerDto {
		return $this->userAtomizerMapper->item($this->userAtomizerRepository->create($createDto));
	}
}
