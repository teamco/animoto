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
  'plugins/widgets/x.hamster/element/x.hamster.element',
  'plugins/widgets/x.hamster/element/x.hamster.preferences.element',
  'plugins/widgets/x.hamster/element/x.hamster.rules.element'
], function defineXHamsterView(BaseView, Header, Footer, XHamsterElement,
    XHamsterPreferencesElement, XHamsterRulesElement) {

  /**
   * Define view
   * @class XHamsterView
   * @extends BaseView
   * @constructor
   */
  var XHamsterView = function XHamsterView() {
  };

  return XHamsterView.extend('XHamsterView', {

    /**
     * Render XHamster element
     * @memberOf XHamsterView
     */
    renderXHamster: function renderXHamster() {

      this.header(Header, this.get$container());

      /**
       * Define $xhamster
       * @type {XHamsterElement}
       */
      this.elements.$xhamster = new XHamsterElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf XHamsterView
     * @returns {XHamsterPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define XHamster Preferences Element
       * @type {XHamsterPreferencesElement}
       */
      this.elements.$preferences = new XHamsterPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf XHamsterView
     * @param widgetRules
     * @param contentRules
     * @returns {XHamsterRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define XHamster Rules Element
       * @type {XHamsterRulesElement}
       */
      this.elements.$rules = new XHamsterRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render XHamster
     * @memberOf XHamsterView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderXHamster.bind(this)
      );
    }

  }, BaseView.prototype)

});
