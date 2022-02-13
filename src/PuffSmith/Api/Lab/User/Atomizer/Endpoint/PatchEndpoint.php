<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\User\Dto\Atomizer\PatchDto;
use PuffSmith\User\Dto\Atomizer\UserAtomizerDto;
use PuffSmith\User\Mapper\Atomizer\UserAtomizerMapperTrait;
use PuffSmith\User\Repository\Atomizer\UserAtomizerRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use UserAtomizerRepositoryTrait;
	use UserAtomizerMapperTrait;

	public function patch(PatchDto $patchDto): UserAtomizerDto {
		return $this->userAtomizerMapper->item($this->userAtomizerRepository->update($patchDto));
	}
}
