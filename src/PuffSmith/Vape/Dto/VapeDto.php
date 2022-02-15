<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Mixture\Dto\MixtureDto;
use PuffSmith\Mod\Dto\ModDto;

class VapeDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $modId;
	/**
	 * @var ModDto
	 */
	public ModDto $mod;
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var BuildDto
	 */
	public BuildDto $build;
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var MixtureDto
	 */
	public MixtureDto $mixture;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
	/**
	 * @var DriptipDto|null
	 */
	public ?DriptipDto $driptip;
	/**
	 * @var int|null
	 */
	public ?int $rating;
	/**
	 * @var int|null
	 */
	public ?int $taste;
	/**
	 * @var int|null
	 */
	public ?int $throathit;
	/**
	 * @var int|null
	 */
	public ?int $fruits;
	/**
	 * @var int|null
	 */
	public ?int $tobacco;
	/**
	 * @var int|null
	 */
	public ?int $cakes;
	/**
	 * @var int|null
	 */
	public ?int $complex;
	/**
	 * @var int|null
	 */
	public ?int $fresh;
	/**
	 * @var int|null
	 */
	public ?int $clouds;
	/**
	 * @var int|null
	 */
	public ?int $mtl;
	/**
	 * @var int|null
	 */
	public ?int $dl;
	/**
	 * @var int|null
	 */
	public ?int $dryhit;
	/**
	 * @var int|null
	 */
	public ?int $leaks;
	/**
	 * @var int|null
	 */
	public ?int $airflow;
	/**
	 * @var int|null
	 */
	public ?int $juice;
	/**
	 * @var float|null
	 */
	public ?float $power;
	/**
	 * @var int|null
	 */
	public ?int $tc;
	/**
	 * @var string
	 */
	public string $stamp;
}
