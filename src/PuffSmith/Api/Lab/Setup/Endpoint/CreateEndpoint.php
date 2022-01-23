<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Setup\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Setup\Dto\Create\CreateDto;
use PuffSmith\Setup\Dto\SetupDto;
use PuffSmith\Setup\Mapper\SetupMapperTrait;
use PuffSmith\Setup\Repository\SetupRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use SetupRepositoryTrait;
	use SetupMapperTrait;

	public function post(CreateDto $createDto): SetupDto {
		return $this->setupMapper->item($this->setupRepository->create($createDto));
	}
}
