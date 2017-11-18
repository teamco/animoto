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
  'plugins/widgets/prezi/element/prezi.element',
  'plugins/widgets/prezi/element/prezi.preferences.element',
  'plugins/widgets/prezi/element/prezi.rules.element'
], function definePreziView(BaseView, Header, Footer, PreziElement,
    PreziPreferencesElement, PreziRulesElement) {

  /**
   * Define view
   * @class PreziView
   * @extends BaseView
   * @constructor
   */
  var PreziView = function PreziView() {
  };

  return PreziView.extend('PreziView', {

    /**
     * Render prezi element
     * @memberOf PreziView
     */
    renderPrezi: function renderPrezi() {

      this.header(Header, this.get$container());

      /**
       * Define $prezi
       * @type {PreziElement}
       */
      this.elements.$prezi = new PreziElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf PreziView
     * @returns {PreziPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Prezi Preferences Element
       * @type {PreziPreferencesElement}
       */
      this.elements.$preferences = new PreziPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf PreziView
     * @param widgetRules
     * @param contentRules
     * @returns {PreziRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define Prezi Rules Element
       * @type {PreziRulesElement}
       */
      this.elements.$rules = new PreziRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render prezi
     * @memberOf PreziView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderPrezi.bind(this)
      );
    }

  }, BaseView.prototype)

});
