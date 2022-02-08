<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto\Comment;

use Edde\Dto\AbstractDto;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Comment\Dto\CommentDto;

class AtomizerCommentDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var AtomizerDto
	 */
	public AtomizerDto $atomizer;
	/**
	 * @var string
	 */
	public string $atomizerId;
	/**
	 * @var CommentDto
	 */
	public CommentDto $comment;
	/**
	 * @var string
	 */
	public string $commentId;
}
