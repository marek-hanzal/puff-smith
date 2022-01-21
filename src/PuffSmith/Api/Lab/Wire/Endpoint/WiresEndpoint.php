<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Wire\Dto\WireDto;
use PuffSmith\Wire\Dto\WireFilterDto;
use PuffSmith\Wire\Dto\WireOrderByDto;
use PuffSmith\Wire\Mapper\WireMapperTrait;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

class WiresEndpoint extends AbstractQueryEndpoint {
	use WireRepositoryTrait;
	use WireMapperTrait;

	/**
	 * @param Query<WireOrderByDto, WireFilterDto> $query
	 *
	 * @return QueryResult<WireDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->wireRepository->toResult($query, $this->wireMapper);
	}
}
