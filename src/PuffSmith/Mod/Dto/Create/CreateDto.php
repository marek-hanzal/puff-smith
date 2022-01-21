<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var int|null
	 */
	public ?int $power;
	/**
	 * @var string
	 */
	public string $vendorId;
}
