<?php
declare(strict_types=1);

namespace PuffSmith\Cotton\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class CottonFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string[]|null|void
	 */
	public ?array $vendorIds;
}
