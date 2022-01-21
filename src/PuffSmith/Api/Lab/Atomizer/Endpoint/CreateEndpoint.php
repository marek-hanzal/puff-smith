<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Atomizer\Dto\Create\CreateDto;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;

	public function post(CreateDto $createDto): AtomizerDto {
		return $this->atomizerMapper->item($this->atomizerRepository->create($createDto));
	}
}
