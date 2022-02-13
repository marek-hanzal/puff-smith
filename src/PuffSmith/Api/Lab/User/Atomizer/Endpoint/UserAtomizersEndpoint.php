<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\User\Atomizer\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\User\Dto\Atomizer\UserAtomizerDto;
use PuffSmith\User\Dto\Atomizer\UserAtomizerFilterDto;
use PuffSmith\User\Dto\Atomizer\UserAtomizerOrderByDto;
use PuffSmith\User\Mapper\Atomizer\UserAtomizerMapperTrait;
use PuffSmith\User\Repository\Atomizer\UserAtomizerRepositoryTrait;

class UserAtomizersEndpoint extends AbstractQueryEndpoint {
	use UserAtomizerRepositoryTrait;
	use UserAtomizerMapperTrait;

	/**
	 * @param Query<UserAtomizerOrderByDto, UserAtomizerFilterDto> $query
	 *
	 * @return QueryResult<UserAtomizerDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->userAtomizerRepository->toResult($query, $this->userAtomizerMapper);
	}
}
