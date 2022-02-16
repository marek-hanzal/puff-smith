<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Dto;

use Edde\Dto\AbstractDto;

class OhmDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $wireId;
	/**
	 * @var int
	 */
	public int $wraps;
	/**
	 * @var float
	 */
	public float $size;
}
