<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Base\Dto\BaseDto;
use PuffSmith\Booster\Dto\BoosterDto;
use PuffSmith\Liquid\Dto\LiquidDto;

class MixtureDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $code;
	/**
	 * @var int|null
	 */
	public ?int $steep;
	/** @var bool */
	public bool $active;
	/**
	 * @var int
	 */
	public int $pg;
	/**
	 * @var int
	 */
	public int $vg;
	/**
	 * @var int
	 */
	public int $nicotine;
	/**
	 * @var int
	 */
	public int $volume;
	/**
	 * @var string
	 */
	public string $mixed;
	/**
	 * @var string|null
	 */
	public ?string $expires;
	/**
	 * @var string
	 */
	public string $liquidId;
	/**
	 * @var LiquidDto
	 */
	public LiquidDto $liquid;
	/**
	 * @var string|null
	 */
	public ?string $boosterId;
	/**
	 * @var BoosterDto|null
	 */
	public ?BoosterDto $booster;
	/**
	 * @var string|null
	 */
	public ?string $baseId;
	/**
	 * @var BaseDto|null
	 */
	public ?BaseDto $base;
}
