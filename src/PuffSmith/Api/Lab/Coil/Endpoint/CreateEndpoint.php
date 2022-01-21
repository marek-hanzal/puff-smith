<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Coil\Dto\Create\CreateDto;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use CoilRepositoryTrait;
	use CoilMapperTrait;

	public function post(CreateDto $createDto): CoilDto {
		return $this->coilMapper->item($this->coilRepository->create($createDto));
	}
}
