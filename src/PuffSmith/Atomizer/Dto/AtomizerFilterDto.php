<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class AtomizerFilterDto extends AbstractFilterDto {
	/** @var string|null|void */
	public ?string $name;
	/** @var string[]|null|void */
	public ?array $vendorIds;
	/** @var string|null|void */
	public ?string $userId;
	/** @var string[]|null|void */
	public ?array $typeIds;
	/** @var string[]|null|void */
	public ?array $drawIds;
	/**
	 * @var bool|void
	 */
	public ?bool $dual;
}
