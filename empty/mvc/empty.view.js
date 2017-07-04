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
  'plugins/widgets/empty/element/empty.element',
  'plugins/widgets/empty/element/empty.preferences.element',
  'plugins/widgets/empty/element/empty.rules.element'
], function defineEmptyView(BaseView, Header, Footer, EmptyElement,
    EmptyPreferencesElement, EmptyRulesElement) {

  /**
   * Define view
   * @class EmptyView
   * @extends BaseView
   * @constructor
   */
  var EmptyView = function EmptyView() {
  };

  return EmptyView.extend('EmptyView', {

    /**
     * Render Empty element
     * @memberOf EmptyView
     */
    renderEmpty: function renderEmpty() {

      this.header(Header, this.get$container());

      /**
       * Define $empty
       * @type {EmptyElement}
       */
      this.elements.$empty = new EmptyElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf EmptyView
     * @returns {EmptyPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Empty Preferences Element
       * @type {EmptyPreferencesElement}
       */
      this.elements.$preferences = new EmptyPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf EmptyView
     * @param widgetRules
     * @param contentRules
     * @returns {EmptyRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define Empty Rules Element
       * @type {EmptyRulesElement}
       */
      this.elements.$rules = new EmptyRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render Empty
     * @memberOf EmptyView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderEmpty.bind(this)
      );
    }

  }, BaseView.prototype);
});