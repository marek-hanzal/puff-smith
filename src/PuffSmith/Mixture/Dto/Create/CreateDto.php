<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string|null
	 */
	public ?string $code;
	/**
	 * @var int|null
	 */
	public ?int $steep;
	/**
	 * @var int
	 */
	public int $pg = 0;
	/**
	 * @var int
	 */
	public int $vg = 0;
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
	 * @var string|null
	 */
	public ?string $boosterId;
	/**
	 * @var string|null
	 */
	public ?string $baseId;
}
