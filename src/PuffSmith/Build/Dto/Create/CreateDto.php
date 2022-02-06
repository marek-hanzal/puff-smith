<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/** @var string|null */
	public ?string $created;
	/** @var int|null */
	public ?int $glow;
	/** @var string */
	public string $atomizerId;
	/** @var \PuffSmith\Coil\Dto\Create\CreateDto */
	public string $coil;
	/** @var string */
	public string $cottonId;
	/** @var int */
	public int $coils = 1;
	/** @var int */
	public int $coilOffset = 0;
	/** @var int */
	public int $cottonOffset = 0;
	/** @var float|null */
	public ?float $ohm;
	/** @var bool|null */
	public ?bool $deactivate;
}
