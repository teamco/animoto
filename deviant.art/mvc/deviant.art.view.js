/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/View',
  'element/header.element',
  'element/footer.element',
  'plugins/widgets/deviant.art/element/deviant.art.element',
  'plugins/widgets/deviant.art/element/deviant.art.preferences.element',
  'plugins/widgets/deviant.art/element/deviant.art.rules.element'
], function defineDeviantArtView(BaseView, Header, Footer, DeviantArtElement,
    DeviantArtPreferencesElement, DeviantArtRulesElement) {

  /**
   * Define view
   * @class DeviantArtView
   * @extends BaseView
   * @constructor
   */
  var DeviantArtView = function DeviantArtView() {
  };

  return DeviantArtView.extend('DeviantArtView', {

    /**
     * Render deviantart element
     * @memberOf DeviantArtView
     */
    renderDeviantArt: function renderDeviantArt() {

      this.header(Header, this.get$container());

      /**
       * Define $deviantart
       * @type {DeviantArtElement}
       */
      this.elements.$deviantart = new DeviantArtElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf DeviantArtView
     * @returns {DeviantArtPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define DeviantArt Preferences Element
       * @type {DeviantArtPreferencesElement}
       */
      this.elements.$preferences = new DeviantArtPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf DeviantArtView
     * @param widgetRules
     * @param contentRules
     * @returns {DeviantArtRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define DeviantArt Rules Element
       * @type {DeviantArtRulesElement}
       */
      this.elements.$rules = new DeviantArtRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render deviantart
     * @memberOf DeviantArtView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderDeviantArt.bind(this)
      );
    }

  }, BaseView.prototype)

});
