<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Mod\Dto\ModFilterDto;
use PuffSmith\Mod\Dto\ModOrderByDto;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;

class ModsEndpoint extends AbstractQueryEndpoint {
	use ModRepositoryTrait;
	use ModMapperTrait;

	/**
	 * @param Query<ModOrderByDto, ModFilterDto> $query
	 *
	 * @return QueryResult<ModDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->modRepository->toResult($query, $this->modMapper);
	}
}
