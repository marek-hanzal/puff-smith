<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class LiquidFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string[]|null|void
	 */
	public ?array $vendorIds;
}
