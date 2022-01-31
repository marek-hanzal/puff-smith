<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/** @var int */
	public int $wraps;
	/** @var float */
	public float $ohm;
	/** @var string */
	public string $wireId;
}
