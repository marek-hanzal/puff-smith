<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class VapeFilterDto extends AbstractFilterDto {
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by an atomizer
	 */
	public ?array $atomizerIds;
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
}
