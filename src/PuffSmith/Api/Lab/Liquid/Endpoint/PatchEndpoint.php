<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Liquid\Dto\LiquidDto;
use PuffSmith\Liquid\Dto\PatchDto;
use PuffSmith\Liquid\Mapper\LiquidMapperTrait;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;

	public function patch(PatchDto $patchDto): LiquidDto {
		return $this->liquidMapper->item($this->liquidRepository->update($patchDto));
	}
}
