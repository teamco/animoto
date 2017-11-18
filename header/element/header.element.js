/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineHeaderElement(PluginElement) {

  /**
   * Define Header Element
   * @param view
   * @param opts
   * @returns {HeaderElement}
   * @constructor
   * @class HeaderElement
   * @extends PluginElement
   */
  var HeaderElement = function HeaderElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('header', {
      resource: '/widgets'
    });

    return this;
  };

  return HeaderElement.extend('HeaderElement', {

    /**
     * Render Embedded content
     * @memberOf HeaderElement
     */


    renderEmbeddedContent: function renderEmbeddedContent() {
      var $element = this;
      $element.view.controller.clearParentThumbnail();
      var $logoutButtonElement = '<a class="logoutBtn" title="Exit your accout">Logout</a>';
      var $mainLogo = '<a class="mainLogo"></a>'
      var $name = '<h1>I DOG YOU</h1>';
      $element.$.append(
          $logoutButtonElement, $mainLogo, $name
      );
      // TODO
    }

  }, PluginElement.prototype);

});