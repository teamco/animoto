/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {PluginElement} from '../../../plugin.element';

/**
 * @class EmptyElement
 * @extends PluginElement
 */
export class EmptyElement extends PluginElement {

  /**
   * @param {string} [name]
   * @param {EmptyView} view
   * @param opts
   * @constructor
   */
  constructor(name, view, opts) {
    super(name || 'EmptyElement', view, false);
    this.configElement(view, opts);
  }

  /**
   * @memberOf EmptyElement
   * @param view
   * @param opts
   */
  configElement(view, opts) {
    this._config(view, opts, window.$('<content />')).build(opts);
  }

  /**
   * @memberOf EmptyElement
   */
  renderEmbeddedContent() {
    this.view.scope.logger.debug('Render empty content');
  }
}
