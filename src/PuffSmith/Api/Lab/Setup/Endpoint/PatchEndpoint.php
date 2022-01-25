<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Setup\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Setup\Dto\Patch\PatchDto;
use PuffSmith\Setup\Dto\SetupDto;
use PuffSmith\Setup\Mapper\SetupMapperTrait;
use PuffSmith\Setup\Repository\SetupRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use SetupRepositoryTrait;
	use SetupMapperTrait;

	public function patch(PatchDto $patchDto): SetupDto {
		return $this->setupMapper->item($this->setupRepository->update($patchDto));
	}
}
