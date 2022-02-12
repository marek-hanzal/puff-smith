<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/** @var string|null|void */
	public ?string $created;
	/** @var string|null|void */
	public ?string $atomizerId;
	/** @var string|null|void */
	public ?string $driptipId;
	/** @var string|null|void */
	public ?string $coilId;
	/** @var string|null|void */
	public ?string $cottonId;
	/** @var int|null|void */
	public ?int $coils;
	/** @var float|null|void */
	public ?float $ohm;
}
