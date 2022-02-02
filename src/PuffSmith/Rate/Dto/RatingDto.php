<?php
declare(strict_types=1);

namespace PuffSmith\Rate\Dto;

use Edde\Dto\AbstractDto;

class RatingDto extends AbstractDto {
	/**
	 * @var int
	 */
	public int $count;
	/**
	 * @var string
	 */
	public string $label;
}
