<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Wire\Dto\WireDto;

class CoilDto extends AbstractDto {
	public string $id;
	public int $wraps;
	public string $code;
	public float $ohm;
	public string $wireId;
	public WireDto $wire;
}
