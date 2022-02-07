<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Atomizer\Dto\DeleteDto;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;

	public function post(DeleteDto $deleteDto): AtomizerDto {
		return $this->atomizerMapper->item($this->atomizerRepository->delete($deleteDto->id));
	}
}
