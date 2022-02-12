<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Wire\Dto\PatchDto;
use PuffSmith\Wire\Dto\WireDto;
use PuffSmith\Wire\Mapper\WireMapperTrait;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use WireRepositoryTrait;
	use WireMapperTrait;

	public function patch(PatchDto $patchDto): WireDto {
		return $this->wireMapper->item($this->wireRepository->update($patchDto));
	}
}
