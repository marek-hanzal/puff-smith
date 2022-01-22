<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $code;
	/**
	 * @var int
	 */
	public int $steep;
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
	 * @var float
	 */
	public float $mixed;
	/**
	 * @var float|null
	 */
	public ?float $expires;
	/**
	 * @var string
	 */
	public string $liquidId;
	/**
	 * @var string|null
	 */
	public ?string $boosterId;
	/**
	 * @var string|null
	 */
	public ?string $baseId;
}
