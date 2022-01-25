<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Setup\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Setup\Dto\SetupDto;
use PuffSmith\Setup\Dto\SetupFilterDto;
use PuffSmith\Setup\Dto\SetupOrderByDto;
use PuffSmith\Setup\Mapper\SetupMapperTrait;
use PuffSmith\Setup\Repository\SetupRepositoryTrait;

class SetupsEndpoint extends AbstractQueryEndpoint {
	use SetupRepositoryTrait;
	use SetupMapperTrait;

	/**
	 * @param Query<SetupOrderByDto, SetupFilterDto> $query
	 *
	 * @return QueryResult<SetupDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->setupRepository->toResult($this->withUser($query), $this->setupMapper);
	}
}
