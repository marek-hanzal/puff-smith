<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto\Patch;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string|null|void
	 */
	public ?string $code;
	/** @var bool|null */
	public ?bool $active;
	/**
	 * @var int|null|void
	 */
	public ?int $steep;
	/**
	 * @var int|null|void
	 */
	public ?int $pg;
	/**
	 * @var int|null|void
	 */
	public ?int $vg;
	/**
	 * @var int|null|void
	 */
	public ?int $nicotine;
	/**
	 * @var int|null|void
	 */
	public ?int $volume;
	/**
	 * @var string|null|void
	 */
	public ?string $mixed;
	/**
	 * @var string|null|void
	 */
	public ?string $expires;
	/**
	 * @var string|null|void
	 */
	public ?string $liquidId;
	/**
	 * @var string|null|void
	 */
	public ?string $boosterId;
	/**
	 * @var string|null|void
	 */
	public ?string $baseId;
}
