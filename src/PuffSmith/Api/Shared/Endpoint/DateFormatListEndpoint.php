<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Api\Shared\Dto\DateDto;

/**
 * @description Return list of available date formattings.
 */
class DateFormatListEndpoint extends AbstractQueryEndpoint {
	/**
	 * @param Query $query
	 *
	 * @return QueryResult<DateDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->queryService->toResponse([
			[
				"id"   => "YYYY-mm-dd",
				"code" => "YYYY-mm-dd",
			],
			[
				"id"   => "dd.mm.YYYY",
				"code" => "dd.mm.YYYY",
			],
			[
				"id"   => "LL",
				"code" => "LL",
			],
			[
				"id"   => "LLLL",
				"code" => "LLLL",
			],
		], DateDto::class);
	}
}
