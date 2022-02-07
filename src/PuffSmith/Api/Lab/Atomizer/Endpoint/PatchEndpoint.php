<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Atomizer\Dto\PatchDto;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;

	public function patch(PatchDto $patchDto): AtomizerDto {
		return $this->atomizerMapper->item($this->atomizerRepository->update($patchDto));
	}
}
