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
  'plugins/widgets/tna.flix/element/tna.flix.element',
  'plugins/widgets/tna.flix/element/tna.flix.preferences.element',
  'plugins/widgets/tna.flix/element/tna.flix.rules.element'
], function defineTnaFlixView(BaseView, Header, Footer, TnaFlixElement,
    TnaFlixPreferencesElement, TnaFlixRulesElement) {

  /**
   * Define view
   * @class TnaFlixView
   * @extends BaseView
   * @constructor
   */
  var TnaFlixView = function TnaFlixView() {
  };

  return TnaFlixView.extend('TnaFlixView', {

    /**
     * Render tnaflix element
     * @memberOf TnaFlixView
     */
    renderTnaFlix: function renderTnaFlix() {

      this.header(Header, this.get$container());

      /**
       * Define $tnaflix
       * @type {TnaFlixElement}
       */
      this.elements.$tnaflix = new TnaFlixElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf TnaFlixView
     * @returns {TnaFlixPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define TnaFlix Preferences Element
       * @type {TnaFlixPreferencesElement}
       */
      this.elements.$preferences = new TnaFlixPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf TnaFlixView
     * @param widgetRules
     * @param contentRules
     * @returns {TnaFlixRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define TnaFlix Rules Element
       * @type {TnaFlixRulesElement}
       */
      this.elements.$rules = new TnaFlixRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render tnaflix
     * @memberOf TnaFlixView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderTnaFlix.bind(this)
      );
    }

  }, BaseView.prototype)

});
