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
	/**
	 * @var string[]|null|void
	 * @description Filter builds by an atomizer
	 */
	public ?array $atomizerIds;
	/**
	 * @var string[]|null|void
	 * @description Filter builds by a coil
	 */
	public ?array $coilIds;
	/**
	 * @var string[]|null|void
	 * @description Filter build by a cotton
	 */
	public ?array $cottonIds;
	/**
	 * @var string[]|null|void
	 * @description Filter build by a coil
	 */
	public ?array $wireIds;
}
