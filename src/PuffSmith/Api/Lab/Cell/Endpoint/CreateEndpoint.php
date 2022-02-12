<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cell\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Cell\Dto\CellDto;
use PuffSmith\Cell\Dto\CreateDto;
use PuffSmith\Cell\Mapper\CellMapperTrait;
use PuffSmith\Cell\Repository\CellRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use CellRepositoryTrait;
	use CellMapperTrait;

	public function post(CreateDto $createDto): CellDto {
		return $this->cellMapper->item($this->cellRepository->create($createDto));
	}
}
