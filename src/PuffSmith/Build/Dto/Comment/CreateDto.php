<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Comment;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var string
	 */
	public string $comment;
}
