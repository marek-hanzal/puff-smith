<?php
declare(strict_types=1);

namespace PuffSmith\Build\Dto\Comment;

use Edde\Dto\AbstractDto;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Comment\Dto\CommentDto;

class BuildCommentDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var BuildDto
	 */
	public BuildDto $build;
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var CommentDto
	 */
	public CommentDto $comment;
	/**
	 * @var string
	 */
	public string $commentId;
}
