<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto\Comment;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $vapeId;
	/**
	 * @var string
	 */
	public string $comment;
}
