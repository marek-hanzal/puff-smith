<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Atomizer\Dto\AtomizerFilterDto;
use PuffSmith\Atomizer\Dto\AtomizerOrderByDto;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;

class AtomizersEndpoint extends AbstractQueryEndpoint {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;

	/**
	 * @param Query<AtomizerOrderByDto, AtomizerFilterDto> $query
	 *
	 * @return QueryResult<AtomizerDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->atomizerRepository->toResult($query, $this->atomizerMapper);
	}
}
