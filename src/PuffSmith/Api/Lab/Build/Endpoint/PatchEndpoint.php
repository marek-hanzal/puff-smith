<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Dto\PatchDto;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use BuildRepositoryTrait;
	use BuildMapperTrait;

	public function patch(PatchDto $patchDto): BuildDto {
		return $this->buildMapper->item($this->buildRepository->update($patchDto));
	}
}
