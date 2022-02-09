<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Wire\Dto\WireDto;

class CoilDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var int */
	public int $wraps;
	/** @var string */
	public string $stamp;
	/** @var float */
	public float $size;
	/** @var bool */
	public bool $spaced;
	/** @var string */
	public string $wireId;
	/** @var WireDto */
	public WireDto $wire;
}
