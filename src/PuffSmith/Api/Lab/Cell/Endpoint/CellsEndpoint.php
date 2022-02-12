<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cell\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Cell\Dto\CellDto;
use PuffSmith\Cell\Dto\CellFilterDto;
use PuffSmith\Cell\Dto\CellOrderByDto;
use PuffSmith\Cell\Mapper\CellMapperTrait;
use PuffSmith\Cell\Repository\CellRepositoryTrait;

class CellsEndpoint extends AbstractQueryEndpoint {
	use CellRepositoryTrait;
	use CellMapperTrait;

	/**
	 * @param Query<CellOrderByDto, CellFilterDto> $query
	 *
	 * @return QueryResult<CellDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->cellRepository->toResult($query, $this->cellMapper);
	}
}
