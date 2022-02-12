<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cell\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Cell\Dto\CellDto;
use PuffSmith\Cell\Mapper\CellMapperTrait;
use PuffSmith\Cell\Repository\CellRepositoryTrait;

/**
 * @query cellId
 */
class CellEndpoint extends AbstractFetchEndpoint {
	use CellRepositoryTrait;
	use CellMapperTrait;

	public function get(): CellDto {
		return $this->cellMapper->item($this->cellRepository->find($this->param('cellId')));
	}
}
