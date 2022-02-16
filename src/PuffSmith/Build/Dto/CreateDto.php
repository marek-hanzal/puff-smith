<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/** @var string|null */
	public ?string $created;
	/** @var string */
	public string $atomizerId;
	/** @var string|null|void */
	public ?string $modId;
	/** @var string|null */
	public ?string $driptipId;
	/** @var \PuffSmith\Coil\Dto\CreateDto */
	public \PuffSmith\Coil\Dto\CreateDto $coil;
	/** @var string */
	public string $cottonId;
	/** @var int */
	public int $coils = 1;
	/** @var float|null */
	public ?float $ohm;
	/** @var bool|null */
	public ?bool $deactivate;
	/**
	 * @var string[]
	 */
	public array $drawIds = [];
	/** @var bool */
	public bool $dual = false;
	/** @var int|null */
	public ?int $dualMode;
}
