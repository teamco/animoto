/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyEventManager
 * @type {EmptyEventManager}
 */
const EmptyEventManager = require('../../empty/mvc/empty.event.manager.js');

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
    super(name || 'ImageEventManager', scope, false);

    this.updateEventList({
      checkEmbeddedContent: 'check.embedded.content',
      splitEmbeddedContent: 'split.embedded.content'
    });
  };
};