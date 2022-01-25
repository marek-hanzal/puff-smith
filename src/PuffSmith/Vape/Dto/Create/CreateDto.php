<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $setupId;
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
	/**
	 * @var int
	 */
	public int $rating;
	/**
	 * @var int
	 */
	public int $taste;
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
	 * @var int
	 */
	public int $clouds;
	/**
	 * @var int
	 */
	public int $mtl;
	/**
	 * @var int
	 */
	public int $dl;
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
	 * @var int|null
	 */
	public ?int $power;
	/**
	 * @var int|null
	 */
	public ?int $tc;
}
