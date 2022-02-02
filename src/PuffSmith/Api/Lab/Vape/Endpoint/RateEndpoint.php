<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Vape\Dto\RateDto;
use PuffSmith\Vape\Dto\VapeDto;
use PuffSmith\Vape\Mapper\VapeMapperTrait;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

class RateEndpoint extends AbstractPatchEndpoint {
	use VapeRepositoryTrait;
	use VapeMapperTrait;

	public function patch(RateDto $rateDto): VapeDto {
		return $this->vapeMapper->item($this->vapeRepository->rate($rateDto));
	}
}
