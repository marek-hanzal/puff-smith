<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cell\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Cell\Dto\CellDto;
use PuffSmith\Cell\Dto\DeleteDto;
use PuffSmith\Cell\Mapper\CellMapperTrait;
use PuffSmith\Cell\Repository\CellRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use CellRepositoryTrait;
	use CellMapperTrait;

	public function post(DeleteDto $deleteDto): CellDto {
		return $this->cellMapper->item($this->cellRepository->delete($deleteDto->id));
	}
}
