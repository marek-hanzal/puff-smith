<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Mixture\Dto\MixtureDto;
use PuffSmith\Mixture\Dto\MixtureFilterDto;
use PuffSmith\Mixture\Dto\MixtureOrderByDto;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;

class MixturesEndpoint extends AbstractQueryEndpoint {
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;

	/**
	 * @param Query<MixtureOrderByDto, MixtureFilterDto> $query
	 *
	 * @return QueryResult<MixtureDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->mixtureRepository->toResult($query, $this->mixtureMapper);
	}
}
