<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Endpoint;

use ClanCats\Hydrahon\Query\Sql\Exception;
use Edde\Bridge\User\UserDto;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\Repository\Exception\RepositoryException;
use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use Edde\Rest\Exception\RestException;
use Edde\User\Mapper\UserMapperTrait;
use Edde\User\Repository\UserRepositoryTrait;

/**
 * @description Fetch an user by it's uuid.
 * @query       userId
 */
class UserEndpoint extends AbstractFetchEndpoint {
	use UserMapperTrait;
	use UserRepositoryTrait;

	/**
	 * @return UserDto
	 *
	 * @throws ItemException
	 * @throws RepositoryException
	 * @throws RestException
	 * @throws SkipException
	 * @throws Exception
	 */
	public function get(): UserDto {
		return $this->userMapper->item($this->userRepository->find($this->param('userId')));
	}
}
