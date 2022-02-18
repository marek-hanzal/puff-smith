<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Repository\Dto\AbstractFilterDto;

class VapeFilterDto extends AbstractFilterDto {
	/**
	 * @var string[]|null|void
	 */
	public ?array $vapeIds;
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
	 * @description Filter vapes by an wire
	 */
	public ?array $wireIds;
	/**
	 * @var string[]|null|void
	 * @description Filter vapes by an wire
	 */
	public ?array $cottonIds;
	/**
	 * @var float[]|null|void
	 * @description Filter by resistance
	 */
	public ?array $buildOhm;
	/**
	 * @var float[]|null|void
	 * @description Filter vapes by an coil size
	 */
	public ?array $coilSizes;
	/**
	 * @var float|null|void
	 * @description Filter vapes by an coil size
	 */
	public ?float $coilSize;
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
	/** @var string[]|null|void */
	public ?array $drawIds;
	/**
	 * @var mixed|null|void
	 */
	public $plot;
	/**
	 * @var int|null|void
	 */
	public ?int $ratingLte;
}
