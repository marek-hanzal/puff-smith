<?php
declare(strict_types=1);

namespace PuffSmith\Coil\Dto;

use Edde\Dto\AbstractDto;

class DeleteDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
}
