<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto;

use Edde\Dto\AbstractDto;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Coil\Dto\CoilDto;
use PuffSmith\Cotton\Dto\CottonDto;

class BuildDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var string|null */
	public ?string $description;
	/** @var float */
	public float $ohm;
	/** @var string */
	public string $created;
	/** @var int|null */
	public ?int $glow;
	/** @var bool */
	public bool $active;

	/** @var string */
	public string $atomizerId;
	/** @var AtomizerDto */
	public AtomizerDto $atomizer;

	/** @var string */
	public string $coilId;
	/** @var CoilDto */
	public CoilDto $coil;
	/** @var int */
	public int $coilOffset;
	/** @var int */
	public int $coils;

	/** @var string */
	public string $cottonId;
	/** @var CottonDto */
	public CottonDto $cotton;
	/** @var int */
	public int $cottonOffset;
}
