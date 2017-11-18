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
  'plugins/widgets/wordcamp.tv/element/wordcamp.tv.element',
  'plugins/widgets/wordcamp.tv/element/wordcamp.tv.preferences.element',
  'plugins/widgets/wordcamp.tv/element/wordcamp.tv.rules.element'
], function defineWordcampTvView(BaseView, Header, Footer, WordcampTvElement,
    WordcampTvPreferencesElement, WordcampTvRulesElement) {

  /**
   * Define view
   * @class WordcampTvView
   * @extends BaseView
   * @constructor
   */
  var WordcampTvView = function WordcampTvView() {
  };

  return WordcampTvView.extend('WordcampTvView', {

    /**
     * Render wordcamptv element
     * @memberOf WordcampTvView
     */
    renderWordcampTv: function renderWordcampTv() {

      this.header(Header, this.get$container());

      /**
       * Define $wordcamptv
       * @type {WordcampTvElement}
       */
      this.elements.$wordcamptv = new WordcampTvElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf WordcampTvView
     * @returns {WordcampTvPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define WordcampTv Preferences Element
       * @type {WordcampTvPreferencesElement}
       */
      this.elements.$preferences = new WordcampTvPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf WordcampTvView
     * @param widgetRules
     * @param contentRules
     * @returns {WordcampTvRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define WordcampTv Rules Element
       * @type {WordcampTvRulesElement}
       */
      this.elements.$rules = new WordcampTvRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render wordcamptv
     * @memberOf WordcampTvView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderWordcampTv.bind(this)
      );
    }

  }, BaseView.prototype)

});
