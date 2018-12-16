/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

import {EmptyView} from '../../empty/mvc/empty.view';
import {ImageElement} from '../element/image.element';
import {ImagePreferencesElement} from '../element/image.preferences.element';
import {ImageRulesElement} from '../element/image.rules.element';

/**
 * @class ImageView
 * @extends EmptyView
 * @type {ImageView}
 */
export class ImageView extends EmptyView {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'ImageView', scope);
  }

  /**
   * @memberOf ImageView
   * @return {{
   *  Content: ImageElement,
   *  Preferences: ImagePreferencesElement,
   *  Rules: ImageRulesElement
   * }}
   */
  static getElements() {
    return {
      Content: ImageElement,
      Preferences: ImagePreferencesElement,
      Rules: ImageRulesElement
    };
  }
}