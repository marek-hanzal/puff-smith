<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Setup\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Setup\Dto\SetupDto;
use PuffSmith\Setup\Mapper\SetupMapperTrait;
use PuffSmith\Setup\Repository\SetupRepositoryTrait;

/**
 * @query setupId
 */
class SetupEndpoint extends AbstractFetchEndpoint {
	use SetupRepositoryTrait;
	use SetupMapperTrait;

	public function get(): SetupDto {
		return $this->setupMapper->item($this->setupRepository->find($this->param('setupId')));
	}
}
