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
  }
}