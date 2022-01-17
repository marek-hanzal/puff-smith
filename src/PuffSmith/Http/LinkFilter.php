<?php
declare(strict_types=1);

namespace PuffSmith\Http;

use Edde\Http\AbstractLinkFilter;
use function str_replace;

class LinkFilter extends AbstractLinkFilter {
	public function filter($value) {
		return str_replace(['puff-smith/'], [''], $value);
	}
}
