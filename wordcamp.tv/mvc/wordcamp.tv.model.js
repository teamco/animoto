/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/4/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
defineP([
  'modules/Model',
  'plugins/widgets/widget.content.model'
], function defineWordcampTvModel(BaseModel, WidgetContentModel) {

  /**
   * Define WordcampTv model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class WordcampTvModel
   * @constructor
   */
  var WordcampTvModel = function WordcampTvModel() {

    /**
     * Define preferences
     * @memberOf WordcampTvModel
     * @type {{
         *      wordcamptvEmbedCode: {type: string, disabled: boolean, value:
         *     undefined, visible: boolean}
         * }}
     */
    this.preferences = {
      wordcamptvEmbedCode: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf WordcampTvModel
     * @type {{}}
     */
    this.rules = {};
  };

  return WordcampTvModel.extend('WordcampTvModel', {

    /**
     * Set WordcampTv embed code
     * @memberOf WordcampTvModel
     * @param {string} embed
     */
    setWordcamptvEmbedCode: function setWordcamptvEmbedCode(embed) {
      this.setPrefs('wordcamptvEmbedCode', embed);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});
