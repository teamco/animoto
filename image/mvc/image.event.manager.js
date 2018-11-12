/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

import {EmptyEventManager} from '../../empty/mvc/empty.event.manager';

/**
 * @class PageTabsEventManager
 * @type {ImageEventManager}
 */
export class ImageEventManager extends EmptyEventManager {

  /**
   * @constructor
   * @param {string} name
   * @param {Image} scope
   */
  constructor(name, scope) {
    super(name || 'ImageEventManager', scope);

    this.updateEventList({
      checkEmbeddedContent: 'check.embedded.content',
      splitEmbeddedContent: 'split.embedded.content'
    });
  };
}