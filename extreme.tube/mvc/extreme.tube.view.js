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
  'plugins/widgets/extreme.tube/element/extreme.tube.element',
  'plugins/widgets/extreme.tube/element/extreme.tube.preferences.element',
  'plugins/widgets/extreme.tube/element/extreme.tube.rules.element'
], function defineExtremeTubeView(BaseView, Header, Footer, ExtremeTubeElement,
    ExtremeTubePreferencesElement, ExtremeTubeRulesElement) {

  /**
   * Define view
   * @class ExtremeTubeView
   * @extends BaseView
   * @constructor
   */
  var ExtremeTubeView = function ExtremeTubeView() {
  };

  return ExtremeTubeView.extend('ExtremeTubeView', {

    /**
     * Render extremetube element
     * @memberOf ExtremeTubeView
     */
    renderExtremeTube: function renderExtremeTube() {

      this.header(Header, this.get$container());

      /**
       * Define $extremetube
       * @type {ExtremeTubeElement}
       */
      this.elements.$extremetube = new ExtremeTubeElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf ExtremeTubeView
     * @returns {ExtremeTubePreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define ExtremeTube Preferences Element
       * @type {ExtremeTubePreferencesElement}
       */
      this.elements.$preferences = new ExtremeTubePreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf ExtremeTubeView
     * @param widgetRules
     * @param contentRules
     * @returns {ExtremeTubeRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define ExtremeTube Rules Element
       * @type {ExtremeTubeRulesElement}
       */
      this.elements.$rules = new ExtremeTubeRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render extremetube
     * @memberOf ExtremeTubeView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderExtremeTube.bind(this)
      );
    }

  }, BaseView.prototype)

});
