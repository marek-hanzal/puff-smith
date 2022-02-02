<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class VapeFilterDto extends AbstractFilterDto {
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by the build
	 */
	public ?array $buildIds;
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
	 * @description Filter vapes by a mix
	 */
	public ?array $mixtureIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by a liquid
	 */
	public ?array $liquidIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by a coil
	 */
	public ?array $coilIds;
	/**
	 * @var string|null|void
	 */
	public ?string $userId;
	/**
	 * @var string|null|void
	 */
	public ?string $rate;
}
