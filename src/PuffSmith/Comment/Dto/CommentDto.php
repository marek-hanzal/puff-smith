<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Dto;

use Edde\Dto\AbstractDto;

class CommentDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $stamp;
	/**
	 * @var string
	 */
	public string $comment;
}
