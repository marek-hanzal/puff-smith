<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Dto\Patch;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $comment;
}
