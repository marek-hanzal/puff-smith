<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Booster\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Booster\Dto\BoosterDto;
use PuffSmith\Booster\Dto\BoosterFilterDto;
use PuffSmith\Booster\Dto\BoosterOrderByDto;
use PuffSmith\Booster\Mapper\BoosterMapperTrait;
use PuffSmith\Booster\Repository\BoosterRepositoryTrait;

class BoostersEndpoint extends AbstractQueryEndpoint {
	use BoosterRepositoryTrait;
	use BoosterMapperTrait;

	/**
	 * @param Query<BoosterOrderByDto, BoosterFilterDto> $query
	 *
	 * @return QueryResult<BoosterDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->boosterRepository->toResult($query, $this->boosterMapper);
	}
}
