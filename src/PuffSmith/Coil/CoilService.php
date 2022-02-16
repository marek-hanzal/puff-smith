<?php
declare(strict_types=1);

namespace PuffSmith\Coil;

use PuffSmith\Build\Repository\BuildRepositoryTrait;

/**
 * @Injectable(lazy=true)
 */
class CoilService {
	use BuildRepositoryTrait;

	public function toOhm(int $wraps, int $ohm): float {
		return $ohm / $wraps;
	}

	public function toCoilOhm(string $coilId): ?float {
		$ohm = 0;
		$count = 0;
		foreach ($this->buildsOf($coilId) as $build) {
			$build->ohm && ($ohm += $build->ohm);
			$count++;
		}
		return $count > 0 ? $ohm / $count : null;
	}

	public function buildsOf(string $coilId) {
		return $this->buildRepository->findByCoil($coilId);
	}
}
