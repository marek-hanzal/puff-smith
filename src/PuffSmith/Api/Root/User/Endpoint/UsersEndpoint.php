<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Endpoint;

use Edde\Bridge\User\UserDto;
use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use Edde\User\Mapper\UserMapperTrait;
use Edde\User\Repository\UserRepositoryTrait;
use PuffSmith\User\Dto\UserFilterDto;
use PuffSmith\User\Dto\UserOrderByDto;

/**
 * @description An access to all registered (local) users for the PuffSmith System.
 */
class UsersEndpoint extends AbstractQueryEndpoint {
	use UserMapperTrait;
	use UserRepositoryTrait;

	/**
	 * @param Query<UserOrderByDto, UserFilterDto> $query
	 *
	 * @return QueryResult<UserDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->userRepository->toResult($query, $this->userMapper);
	}
}
