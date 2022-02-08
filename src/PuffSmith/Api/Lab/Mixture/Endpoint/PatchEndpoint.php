<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Mixture\Dto\MixtureDto;
use PuffSmith\Mixture\Dto\PatchDto;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;

	public function patch(PatchDto $patchDto): MixtureDto {
		return $this->mixtureMapper->item($this->mixtureRepository->update($patchDto));
	}
}
