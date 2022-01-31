<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Coil\Dto\Patch\PatchDto;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use CoilRepositoryTrait;
	use CoilMapperTrait;

	public function patch(PatchDto $patchDto): CoilDto {
		return $this->coilMapper->item($this->coilRepository->update($patchDto));
	}
}
