<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto\Comment;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $liquidId;
	/**
	 * @var string
	 */
	public string $comment;
}
