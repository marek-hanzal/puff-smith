<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class SetupFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var string|null|void
	 */
	public ?string $atomizerId;
	/**
	 * @var string|null|void
	 */
	public ?string $modId;
	/**
	 * @var string|null|void
	 */
	public ?string $name;
}
