<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Vape\Dto\VapeDto;
use PuffSmith\Vape\Dto\VapeFilterDto;
use PuffSmith\Vape\Dto\VapeOrderByDto;
use PuffSmith\Vape\Mapper\VapeMapperTrait;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

class VapesEndpoint extends AbstractQueryEndpoint {
	use VapeRepositoryTrait;
	use VapeMapperTrait;

	/**
	 * @param Query<VapeOrderByDto, VapeFilterDto> $query
	 *
	 * @return QueryResult<VapeDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->vapeRepository->toResult($query, $this->vapeMapper);
	}
}
