<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Dto\Comment;

use Edde\Dto\AbstractDto;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Liquid\Dto\LiquidDto;

class LiquidCommentDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var LiquidDto
	 */
	public LiquidDto $liquid;
	/**
	 * @var string
	 */
	public string $liquidId;
	/**
	 * @var CommentDto
	 */
	public CommentDto $comment;
	/**
	 * @var string
	 */
	public string $commentId;
}
