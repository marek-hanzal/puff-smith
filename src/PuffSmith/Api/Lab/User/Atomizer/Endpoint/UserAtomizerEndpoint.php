<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User\Atomizer\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\User\Dto\Atomizer\UserAtomizerDto;
use PuffSmith\User\Mapper\Atomizer\UserAtomizerMapperTrait;
use PuffSmith\User\Repository\Atomizer\UserAtomizerRepositoryTrait;

/**
 * @query userAtomizerId
 */
class UserAtomizerEndpoint extends AbstractFetchEndpoint {
	use UserAtomizerRepositoryTrait;
	use UserAtomizerMapperTrait;

	public function get(): UserAtomizerDto {
		return $this->userAtomizerMapper->item($this->userAtomizerRepository->find($this->param('userAtomizerId')));
	}
}
