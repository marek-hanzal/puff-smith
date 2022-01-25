<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Setup\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Setup\Dto\SetupDto;
use PuffSmith\Setup\Mapper\SetupMapperTrait;
use PuffSmith\Setup\Repository\SetupRepositoryTrait;
use PuffSmith\Vape\Dto\Delete\DeleteDto;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use SetupRepositoryTrait;
	use SetupMapperTrait;

	public function post(DeleteDto $deleteDto): SetupDto {
		return $this->setupMapper->item($this->setupRepository->delete($deleteDto->id));
	}
}
