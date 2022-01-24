<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Vape\Dto\Delete\DeleteDto;
use PuffSmith\Vape\Dto\VapeDto;
use PuffSmith\Vape\Mapper\VapeMapperTrait;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use VapeRepositoryTrait;
	use VapeMapperTrait;

	public function post(DeleteDto $deleteDto): VapeDto {
		return $this->vapeMapper->item($this->vapeRepository->delete($deleteDto->id));
	}
}
