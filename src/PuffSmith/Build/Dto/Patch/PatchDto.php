<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Patch;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/** @var string|null|void */
	public string $name;
	/** @var string|null|void */
	public ?string $description;
	/** @var string|null|void */
	public string $atomizerId;
	/** @var string|null|void */
	public string $coilId;
	/** @var string|null|void */
	public string $cottonId;
	/** @var int|null|void */
	public int $coils;
	/** @var int|null|void */
	public int $coilOffset;
	/** @var int|null|void */
	public int $cottonOffset;
	/** @var float|null|void */
	public float $ohm;
}
