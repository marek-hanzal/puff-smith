<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto\Patch;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/** @var int|null|void */
	public ?int $wraps;
	/** @var float|null|void */
	public ?float $size;
	/** @var string|null|void */
	public ?string $wireId;
}
