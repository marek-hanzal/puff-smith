<?php
declare(strict_types=1);

namespace PuffSmith\Rate\Dto;

use Edde\Dto\AbstractDto;

class RateDto extends AbstractDto {
	/**
	 * @var int
	 */
	public int $max;
	/**
	 * @var RatingDto[]
	 */
	public array $ratings = [];
}
