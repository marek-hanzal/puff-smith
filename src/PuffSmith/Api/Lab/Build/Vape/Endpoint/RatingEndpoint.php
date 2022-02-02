<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Vape\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Rate\Dto\RateDto;
use PuffSmith\Vape\Dto\VapeFilterDto;
use PuffSmith\Vape\Dto\VapeOrderByDto;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

class RatingEndpoint extends AbstractFetchEndpoint {
	use VapeRepositoryTrait;

	/**
	 * @param Query<VapeOrderByDto, VapeFilterDto> $query
	 */
	public function post(Query $query): RateDto {
		return $this->dtoService->fromArray(RateDto::class, [
			'max'     => 10,
			'ratings' => [
				[
					'count' => 10,
					'label' => '0',
				],
				[
					'count' => 12,
					'label' => '1',
				],
				[
					'count' => 5,
					'label' => '4',
				],
				[
					'count' => 18,
					'label' => '8',
				],
			],
		]);
	}
}
