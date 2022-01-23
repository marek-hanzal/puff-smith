<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Vape\Dto\Create\CreateDto;
use PuffSmith\Vape\Dto\VapeDto;
use PuffSmith\Vape\Mapper\VapeMapperTrait;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use VapeRepositoryTrait;
	use VapeMapperTrait;

	public function post(CreateDto $createDto): VapeDto {
		return $this->vapeMapper->item($this->vapeRepository->create($createDto));
	}
}
