<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class CellFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string[]|null
	 */
	public ?array $typeIds;
	/**
	 * @var string[]|null|void
	 */
	public ?array $vendorIds;
}
