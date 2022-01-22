<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Base\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Base\Dto\BaseDto;
use PuffSmith\Base\Dto\BaseFilterDto;
use PuffSmith\Base\Dto\BaseOrderByDto;
use PuffSmith\Base\Mapper\BaseMapperTrait;
use PuffSmith\Base\Repository\BaseRepositoryTrait;

class BasesEndpoint extends AbstractQueryEndpoint {
	use BaseRepositoryTrait;
	use BaseMapperTrait;

	/**
	 * @param Query<BaseOrderByDto, BaseFilterDto> $query
	 *
	 * @return QueryResult<BaseDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->baseRepository->toResult($query, $this->baseMapper);
	}
}
