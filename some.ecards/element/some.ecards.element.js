/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element'
], function defineSomeEcardsElement(PluginElement) {

  /**
   * Define SomeEcards Element
   * @param view
   * @param opts
   * @returns {SomeEcardsElement}
   * @constructor
   * @class SomeEcardsElement
   * @extends PluginElement
   */
  var SomeEcardsElement = function SomeEcardsElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('some.ecards', {resource: '/widgets'});

    return this;
  };

  return SomeEcardsElement.extend('SomeEcardsElement', {

    /**
     * Render Embedded content
     * @memberOf SomeEcardsElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {

      if (!(embed && (embed + '').match(/^<a/))) {
        return false;
      }

      this.$.append(embed);
    }

  }, PluginElement.prototype);

});
