<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Dto\BuildFilterDto;
use PuffSmith\Build\Dto\BuildOrderByDto;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;

class BuildsEndpoint extends AbstractQueryEndpoint {
	use BuildRepositoryTrait;
	use BuildMapperTrait;

	/**
	 * @param Query<BuildOrderByDto, BuildFilterDto> $query
	 *
	 * @return QueryResult<BuildDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->buildRepository->toResult($query, $this->buildMapper);
	}
}
