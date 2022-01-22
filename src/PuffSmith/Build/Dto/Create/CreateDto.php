<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/** @var string */
	public string $name;
	/** @var string|null */
	public ?string $description;
	/** @var string */
	public string $atomizerId;
	/** @var string */
	public string $coilId;
	/** @var string */
	public string $cottonId;
	/** @var int */
	public int $coils = 1;
	/** @var int */
	public int $coilOffset = 0;
	/** @var int */
	public int $cottonOffset = 0;
	/** @var float */
	public float $ohm;
}
