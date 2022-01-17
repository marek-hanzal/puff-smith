<?php
declare(strict_types=1);

namespace PuffSmith\Api\Shared\Endpoint;

use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Api\Shared\Dto\DateTimeDto;

/**
 * @description Returns a list of the available date-time formattings.
 */
class DateTimeFormatListEndpoint extends AbstractQueryEndpoint {
	use DtoServiceTrait;

	/**
	 * @param Query $query
	 *
	 * @return QueryResult<DateTimeDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->queryService->toResponse([
			[
				"id"   => "YYYY-mm-dd H:i:s",
				"code" => "YYYY-mm-dd H:i:s",
			],
			[
				"id"   => "LLLL",
				"code" => "LLLL",
			],
		], DateTimeDto::class);
	}
}
