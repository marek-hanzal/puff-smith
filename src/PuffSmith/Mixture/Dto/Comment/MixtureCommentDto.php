<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Dto\Comment;

use Edde\Dto\AbstractDto;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Mixture\Dto\MixtureDto;

class MixtureCommentDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var MixtureDto
	 */
	public MixtureDto $mixture;
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var CommentDto
	 */
	public CommentDto $comment;
	/**
	 * @var string
	 */
	public string $commentId;
}
