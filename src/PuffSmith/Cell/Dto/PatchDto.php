<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/** @var string */
	public string $id;
	/** @var string */
	public string $name;
	/** @var string */
	public string $typeId;
	/** @var int */
	public int $drain;
	/** @var float */
	public float $voltage;
	/** @var string */
	public string $vendorId;
}
