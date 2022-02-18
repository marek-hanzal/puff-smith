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
use function array_merge;
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

		$export = [
			'rating'  => false,
			'median'  => true,
			'average' => true,
			'min'     => true,
			'max'     => true,
		];

		$filter = $query->filter;
		$export = array_merge($export, (array)($filter->plot ?? []));

		foreach ($this->vapeRepository->execute($query) as $result) {
			$count++;
			$ratings['rating'][] = $result->rating;
			$ratings['taste'][] = $result->taste;
			$ratings['complex'][] = $result->complex;
			$ratings['fruits'][] = $result->fruits;
			$ratings['cakes'][] = $result->cakes;
			$ratings['tobacco'][] = $result->tobacco;
			$ratings['fresh'][] = $result->fresh;
			$ratings['mtl'][] = $result->mtl;
			$ratings['dl'][] = $result->dl;
			$ratings['clouds'][] = $result->clouds;
			$ratings['throathit'][] = $result->throathit;
			$ratings['leaks'][] = $result->leaks;
			$ratings['dryhit'][] = $result->dryhit;
		}

		foreach ($ratings as $k => $v) {
			$ratings[$k] = array_values(array_filter($v));
			if (empty($ratings[$k])) {
				continue;
			}
			sort($ratings[$k]);
			$count = count($ratings[$k]);

			$export['rating'] && $data[] = [
				'column' => $k,
				'value'  => ArrayUtils::median($ratings[$k]),
				'group'  => 'rating',
				'count'  => $count,
			];
			$export['median'] && $data[] = [
				'column' => $k,
				'value'  => ArrayUtils::median($ratings[$k]),
				'group'  => 'median',
				'count'  => $count,
			];
			$export['average'] && $data[] = [
				'column' => $k,
				'value'  => ArrayUtils::avg($ratings[$k]),
				'group'  => 'average',
				'count'  => $count,
			];
			$export['min'] && $data[] = [
				'column' => $k,
				'value'  => min($ratings[$k]),
				'group'  => 'min',
				'count'  => $count,
			];
			$export['max'] && $data[] = [
				'column' => $k,
				'value'  => max($ratings[$k]),
				'group'  => 'max',
				'count'  => $count,
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
