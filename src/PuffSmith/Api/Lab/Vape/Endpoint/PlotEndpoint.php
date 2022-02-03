<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Endpoint;

use Edde\Plot\Dto\PlotDto;
use Edde\Query\Dto\Query;
use Edde\Rest\Endpoint\AbstractPlotEndpoint;
use PuffSmith\Vape\Dto\VapeFilterDto;
use PuffSmith\Vape\Dto\VapeOrderByDto;
use PuffSmith\Vape\PlotServiceTrait;

class PlotEndpoint extends AbstractPlotEndpoint {
	use PlotServiceTrait;

	/**
	 * @param Query<VapeOrderByDto, VapeFilterDto> $query
	 *
	 * @return PlotDto
	 */
	public function post(Query $query): PlotDto {
		return $this->plotService->plot($query);
	}
}
