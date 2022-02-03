<?php
declare(strict_types=1);

namespace PuffSmith\Vape;

use Edde\Dto\DtoServiceTrait;
use Edde\Plot\AbstractPlotService;
use Edde\Plot\Dto\DataDto;
use Edde\Plot\Dto\PlotDto;
use Edde\Query\Dto\Query;
use Edde\Utils\ArrayUtils;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;
use function array_filter;
use function array_map;
use function array_values;
use function count;
use function max;
use function min;
use function sort;

class PlotService extends AbstractPlotService {
	use VapeRepositoryTrait;
	use DtoServiceTrait;

	public function plot(Query $query): PlotDto {
		$ratings = [];
		$data = [];
		$count = 0;

		foreach ($this->vapeRepository->execute($query) as $result) {
			$count++;
			$ratings['rating'][] = $result->rating;
			$ratings['taste'][] = $result->taste;
			$ratings['fruits'][] = $result->fruits;
			$ratings['tobacco'][] = $result->tobacco;
			$ratings['cakes'][] = $result->cakes;
			$ratings['complex'][] = $result->complex;
			$ratings['fresh'][] = $result->fresh;
			$ratings['clouds'][] = $result->clouds;
			$ratings['mtl'][] = $result->mtl;
			$ratings['dl'][] = $result->dl;
			$ratings['throathit'][] = $result->throathit;
		}

		foreach ($ratings as $k => $v) {
			$ratings[$k] = array_values(array_filter($v));
			if (empty($ratings[$k])) {
				continue;
			}
			sort($ratings[$k]);

			$data[] = [
				'column' => $k,
				'value'  => min($ratings[$k]),
				'group'  => 'min',
			];
			$data[] = [
				'column' => $k,
				'value'  => max($ratings[$k]),
				'group'  => 'max',
			];
			$data[] = [
				'column' => $k,
				'value'  => ArrayUtils::avg($ratings[$k]),
				'group'  => 'average',
			];
			$data[] = [
				'column' => $k,
				'value'  => ArrayUtils::median($ratings[$k]),
				'group'  => 'median',
			];
			$data[] = [
				'column' => $k,
				'value'  => count($ratings[$k]),
				'group'  => 'count',
			];
		}

		return $this->dtoService->fromArray(PlotDto::class, [
			'isStack' => false,
			'isGroup' => true,
			'count'   => $count,
			'data'    => array_map(function (array $item) {
				return $this->dtoService->fromArray(DataDto::class, $item);
			}, $data),
		]);
	}
}
