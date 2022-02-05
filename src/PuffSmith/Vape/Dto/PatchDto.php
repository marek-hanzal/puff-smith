<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $modId;
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
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
	 * @var int
	 */
	public int $dryhit;
	/**
	 * @var int
	 */
	public int $leaks;
	/**
	 * @var int
	 */
	public int $airflow;
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
}
