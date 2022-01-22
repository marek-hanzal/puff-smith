<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Cotton\Dto\CottonFilterDto;
use PuffSmith\Cotton\Dto\CottonOrderByDto;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;

class CottonsEndpoint extends AbstractQueryEndpoint {
	use CottonRepositoryTrait;
	use CottonMapperTrait;

	/**
	 * @param Query<CottonOrderByDto, CottonFilterDto> $query
	 *
	 * @return QueryResult<CottonDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->cottonRepository->toResult($query, $this->cottonMapper);
	}
}
