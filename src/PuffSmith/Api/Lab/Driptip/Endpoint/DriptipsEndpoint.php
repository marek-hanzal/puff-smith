<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Driptip\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Driptip\Dto\DriptipFilterDto;
use PuffSmith\Driptip\Dto\DriptipOrderByDto;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;

class DriptipsEndpoint extends AbstractQueryEndpoint {
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;

	/**
	 * @param Query<DriptipOrderByDto, DriptipFilterDto> $query
	 *
	 * @return QueryResult<DriptipDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->driptipRepository->toResult($query, $this->driptipMapper);
	}
}
