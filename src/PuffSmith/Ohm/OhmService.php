<?php
declare(strict_types=1);

namespace PuffSmith\Ohm;

class OhmService {
	public function toOhm(float $voltage, float $current): float {
		return $voltage / $current;
	}
}
