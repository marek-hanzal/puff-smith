<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class BuildFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var bool|null|void
	 */
	public ?bool $active;
}
