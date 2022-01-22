<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Base\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Base\Dto\BaseDto;
use PuffSmith\Base\Dto\Create\CreateDto;
use PuffSmith\Base\Mapper\BaseMapperTrait;
use PuffSmith\Base\Repository\BaseRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use BaseRepositoryTrait;
	use BaseMapperTrait;

	public function post(CreateDto $createDto): BaseDto {
		return $this->baseMapper->item($this->baseRepository->create($createDto));
	}
}
