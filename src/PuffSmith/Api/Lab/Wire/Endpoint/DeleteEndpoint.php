<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Wire\Dto\DeleteDto;
use PuffSmith\Wire\Dto\WireDto;
use PuffSmith\Wire\Mapper\WireMapperTrait;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use WireRepositoryTrait;
	use WireMapperTrait;

	public function post(DeleteDto $deleteDto): WireDto {
		return $this->wireMapper->item($this->wireRepository->delete($deleteDto->id));
	}
}
