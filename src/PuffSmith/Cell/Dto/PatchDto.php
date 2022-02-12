<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var int */
	public int $size;
	/** @var int */
	public int $drain;
	/** @var float */
	public float $voltage;
	/** @var string */
	public string $vendorId;
}
