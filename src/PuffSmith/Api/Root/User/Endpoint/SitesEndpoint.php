<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Api\Root\User\Dto\SiteDto;

/**
 * @description Provides a list of available sites.
 */
class SitesEndpoint extends AbstractQueryEndpoint {
	/**
	 * @param Query $query
	 *
	 * @return QueryResult<SiteDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->queryService->toResponse([
			[
				'id'   => 'root',
				'name' => 'root',
			],
			[
				'id'   => 'lab',
				'name' => 'lab',
			],
			[
				'id'   => 'none',
				'name' => 'none',
			],
		], SiteDto::class);
	}
}
