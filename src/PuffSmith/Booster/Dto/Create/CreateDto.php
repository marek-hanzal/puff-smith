<?php
declare(strict_types=1);

namespace PuffSmith\Booster\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var int
	 */
	public int $nicotine;
	/**
	 * @var int
	 */
	public int $volume;
	/**
	 * @var string
	 */
	public string $vendorId;
}
