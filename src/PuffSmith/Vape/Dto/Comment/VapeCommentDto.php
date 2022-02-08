<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto\Comment;

use Edde\Dto\AbstractDto;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Vape\Dto\VapeDto;

class VapeCommentDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var VapeDto
	 */
	public VapeDto $vape;
	/**
	 * @var string
	 */
	public string $vapeId;
	/**
	 * @var CommentDto
	 */
	public CommentDto $comment;
	/**
	 * @var string
	 */
	public string $commentId;
}
