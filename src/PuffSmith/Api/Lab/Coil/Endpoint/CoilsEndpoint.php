<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Coil\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use Edde\User\Exception\UserNotSelectedException;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Coil\Dto\CoilFilterDto;
use PuffSmith\Coil\Dto\CoilOrderByDto;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class CoilsEndpoint extends AbstractQueryEndpoint {
	use CoilRepositoryTrait;
	use CoilMapperTrait;

	/**
	 * @param Query<CoilOrderByDto, CoilFilterDto> $query
	 *
	 * @return QueryResult<CoilDto>
	 *
	 * @throws UserNotSelectedException
	 */
	public function post(Query $query): QueryResult {
		return $this->coilRepository->toResult($this->withUser($query), $this->coilMapper);
	}
}
