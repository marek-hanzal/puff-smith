<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use Edde\Role\Dto\RoleDto;
use Edde\Role\Mapper\RoleMapperTrait;

/**
 * @description Provides a list of roles available.
 */
class RolesEndpoint extends AbstractQueryEndpoint {
	use RoleMapperTrait;

	/**
	 * @param Query $query
	 *
	 * @return QueryResult<RoleDto>
	 */
	public function post(Query $query): QueryResult {
		return new QueryResult(0, 10, []);
//		return $this->roleRepository->toResult($query, $this->roleMapper);
	}
}
