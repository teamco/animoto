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
], function defineTwentyThreeModel(BaseModel, WidgetContentModel) {

  /**
   * Define TwentyThree model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class TwentyThreeModel
   * @constructor
   */
  var TwentyThreeModel = function TwentyThreeModel() {

    /**
     * Define preferences
     * @memberOf TwentyThreeModel
     * @type {{
         *      twentythreeEmbedCode: {type: string, disabled: boolean, value:
         *     undefined, visible: boolean}
         * }}
     */
    this.preferences = {
      twentythreeEmbedCode: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf TwentyThreeModel
     * @type {{}}
     */
    this.rules = {};
  };

  return TwentyThreeModel.extend('TwentyThreeModel', {

    /**
     * Set TwentyThree embed code
     * @memberOf TwentyThreeModel
     * @param {string} embed
     */
    setTwentythreeEmbedCode: function setTwentythreeEmbedCode(embed) {
      this.setPrefs('twentythreeEmbedCode', embed);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});
