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
	 * @var int|null|void
	 */
	public ?int $rating;
	/**
	 * @var bool|null|void
	 */
	public ?bool $active;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by an atomizer
	 */
	public ?array $atomizerIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by a mod
	 */
	public ?array $modIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by a coil
	 */
	public ?array $coilIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by a coil
	 */
	public ?array $cottonIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by a coil
	 */
	public ?array $wireIds;
}
