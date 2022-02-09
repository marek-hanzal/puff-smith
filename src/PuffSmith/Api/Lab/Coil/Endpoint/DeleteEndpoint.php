<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Coil\Dto\DeleteDto;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use CoilRepositoryTrait;
	use CoilMapperTrait;

	public function post(DeleteDto $deleteDto): CoilDto {
		return $this->coilMapper->item($this->coilRepository->delete($deleteDto->id));
	}
}
