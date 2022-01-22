<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Liquid\Dto\LiquidDto;
use PuffSmith\Liquid\Dto\LiquidFilterDto;
use PuffSmith\Liquid\Dto\LiquidOrderByDto;
use PuffSmith\Liquid\Mapper\LiquidMapperTrait;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;

class LiquidsEndpoint extends AbstractQueryEndpoint {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;

	/**
	 * @param Query<LiquidOrderByDto, LiquidFilterDto> $query
	 *
	 * @return QueryResult<LiquidDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->liquidRepository->toResult($query, $this->liquidMapper);
	}
}
