<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 * @description vendor name
	 */
	public string $name;
}
