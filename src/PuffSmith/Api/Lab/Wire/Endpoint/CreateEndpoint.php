<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Wire\Dto\CreateDto;
use PuffSmith\Wire\Dto\WireDto;
use PuffSmith\Wire\Mapper\WireMapperTrait;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use WireRepositoryTrait;
	use WireMapperTrait;

	public function post(CreateDto $createDto): WireDto {
		return $this->wireMapper->item($this->wireRepository->create($createDto));
	}
}
