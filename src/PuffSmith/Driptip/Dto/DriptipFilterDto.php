<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class DriptipFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var string|null|void
	 */
	public ?string $name;
}
