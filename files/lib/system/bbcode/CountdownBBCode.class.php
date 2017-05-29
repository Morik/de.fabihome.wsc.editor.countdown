<?php
namespace wcf\system\bbcode;
use wcf\system\WCF;
use wcf\util\StringUtil;

/**
 * Parses the [countdown] bbcode tag.
 *
 * @author	Fabian (Fabi_995)
 * @copyright	2017 Fabian
 * @license	All rights reserved
 */
class CountdownBBCode extends AbstractBBCode{

    /**
     * @see BBCode::getParsedTag()
     */
    public function getParsedTag(array $openingTag, $content, array $closingTag, BBCodeParser $parser) {
        if ($parser->getOutputType() == 'text/html') {
            WCF::getTPL()->assign(array(
                'content' => $content,
                'datetime' => (!empty($openingTag['attributes'][0]) ? $openingTag['attributes'][0] : ''),
                'countdownID' => StringUtil::getRandomID(),
            ));
            return WCF::getTPL()->fetch('countdownBBCodeTag');
        }
    }
}