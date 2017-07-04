/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'modules/View',
  'element/header.element',
  'element/footer.element',
  'plugins/widgets/funny.or.die/element/funny.or.die.element',
  'plugins/widgets/funny.or.die/element/funny.or.die.preferences.element',
  'plugins/widgets/funny.or.die/element/funny.or.die.rules.element'
], function defineFunnyOrDieView(BaseView, Header, Footer, FunnyOrDieElement,
    FunnyOrDiePreferencesElement, FunnyOrDieRulesElement) {

  /**
   * Define view
   * @class FunnyOrDieView
   * @extends BaseView
   * @constructor
   */
  var FunnyOrDieView = function FunnyOrDieView() {
  };

  return FunnyOrDieView.extend('FunnyOrDieView', {

    /**
     * Render funnyordie element
     * @memberOf FunnyOrDieView
     */
    renderFunnyOrDie: function renderFunnyOrDie() {

      this.header(Header, this.get$container());

      /**
       * Define $funnyordie
       * @type {FunnyOrDieElement}
       */
      this.elements.$funnyordie = new FunnyOrDieElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf FunnyOrDieView
     * @returns {FunnyOrDiePreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define FunnyOrDie Preferences Element
       * @type {FunnyOrDiePreferencesElement}
       */
      this.elements.$preferences = new FunnyOrDiePreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf FunnyOrDieView
     * @param widgetRules
     * @param contentRules
     * @returns {FunnyOrDieRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define FunnyOrDie Rules Element
       * @type {FunnyOrDieRulesElement}
       */
      this.elements.$rules = new FunnyOrDieRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render funnyordie
     * @memberOf FunnyOrDieView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderFunnyOrDie.bind(this)
      );
    }

  }, BaseView.prototype)

});
