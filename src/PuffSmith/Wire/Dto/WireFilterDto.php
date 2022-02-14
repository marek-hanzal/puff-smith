<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class WireFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string[]|null|void
	 */
	public ?array $vendorIds;
	/** @var string[]|null|void */
	public ?array $drawIds;
}
