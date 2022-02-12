<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cell\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Cell\Dto\CellDto;
use PuffSmith\Cell\Dto\PatchDto;
use PuffSmith\Cell\Mapper\CellMapperTrait;
use PuffSmith\Cell\Repository\CellRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use CellRepositoryTrait;
	use CellMapperTrait;

	public function patch(PatchDto $patchDto): CellDto {
		return $this->cellMapper->item($this->cellRepository->update($patchDto));
	}
}
