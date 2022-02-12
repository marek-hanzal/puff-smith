<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class ModFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string[]|null
	 */
	public ?array $vendorIds;
}
