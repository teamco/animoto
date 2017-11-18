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
  'plugins/widgets/coub/element/coub.element',
  'plugins/widgets/coub/element/coub.preferences.element',
  'plugins/widgets/coub/element/coub.rules.element'
], function defineCoubView(BaseView, Header, Footer, CoubElement,
    CoubPreferencesElement, CoubRulesElement) {

  /**
   * Define view
   * @class CoubView
   * @extends BaseView
   * @constructor
   */
  var CoubView = function CoubView() {
  };

  return CoubView.extend('CoubView', {

    /**
     * Render Coub element
     * @memberOf CoubView
     */
    renderCoub: function renderCoub() {

      this.header(Header, this.get$container());

      /**
       * Define $coub
       * @type {CoubElement}
       */
      this.elements.$coub = new CoubElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf CoubView
     * @returns {CoubPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Coub Preferences Element
       * @type {CoubPreferencesElement}
       */
      this.elements.$preferences = new CoubPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf CoubView
     * @param widgetRules
     * @param contentRules
     * @returns {CoubRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define Coub Rules Element
       * @type {CoubRulesElement}
       */
      this.elements.$rules = new CoubRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render Coub
     * @memberOf CoubView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderCoub.bind(this)
      );
    }

  }, BaseView.prototype)

});
