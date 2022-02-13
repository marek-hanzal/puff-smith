<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Endpoint;

use Edde\Bridge\User\UserDto;
use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use Edde\User\Mapper\UserMapperTrait;
use Edde\User\Repository\UserRepositoryTrait;
use PuffSmith\User\Dto\CreateDto;

class CreateEndpoint extends AbstractCreateEndpoint {
	use UserRepositoryTrait;
	use UserMapperTrait;

	public function post(CreateDto $createDto): UserDto {
		return $this->userMapper->item($this->userRepository->create($createDto));
	}
}
