<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class MixtureFilterDto extends AbstractFilterDto {
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var string|null|void
	 */
	public ?string $code;
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string[]|null|void
	 */
	public ?array $vendorIds;
	/**
	 * @var string[]|null|void
	 */
	public ?array $baseIds;
	/**
	 * @var string[]|null|void
	 */
	public ?array $boosterIds;
	/**
	 * @var bool|null|void
	 */
	public ?bool $active;
}
