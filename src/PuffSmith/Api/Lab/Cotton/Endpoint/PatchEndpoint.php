<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Cotton\Dto\PatchDto;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use CottonRepositoryTrait;
	use CottonMapperTrait;

	public function patch(PatchDto $patchDto): CottonDto {
		return $this->cottonMapper->item($this->cottonRepository->update($patchDto));
	}
}
