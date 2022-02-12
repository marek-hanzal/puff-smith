<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Dto;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 * @description vendor name
	 */
	public string $name;
}
