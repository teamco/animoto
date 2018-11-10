/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {EmptyPreferencesElement} from '../../empty/element/empty.preferences.element';

/**
 * @class PageTabsPreferencesElement
 * @extends EmptyPreferencesElement
 * @type {PageTabsPreferencesElement}
 */
export class PageTabsPreferencesElement extends EmptyPreferencesElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param {PageTabsView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'PageTabsPreferencesElement', view, opts);
  }
}