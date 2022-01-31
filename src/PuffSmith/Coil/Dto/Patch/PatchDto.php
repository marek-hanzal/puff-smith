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
	public ?float $ohm;
	/** @var string|null|void */
	public ?string $code;
	/** @var string|null|void */
	public ?string $wireId;
}
