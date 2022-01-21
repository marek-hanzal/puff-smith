<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	public int $wraps;
	public float $ohm;
	public string $code;
	public string $wireId;
	public string $userId;
}
