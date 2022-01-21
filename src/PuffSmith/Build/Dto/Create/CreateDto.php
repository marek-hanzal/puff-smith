<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	public string $atomizerId;
	public string $coilId;
	public string $cottonId;
	public string $description;
	public int $coils = 1;
	public int $coil = 0;
	public int $cotton = 0;
	public float $ohm;
	public float $created;
	public string $userId;
}
