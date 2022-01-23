<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var int
	 */
	public int $pg;
	/**
	 * @var int
	 */
	public int $vg;
	/**
	 * @var int
	 */
	public int $volume;
	/**
	 * @var string|null
	 */
	public ?string $description;
	/**
	 * @var string
	 */
	public string $vendorId;
}
