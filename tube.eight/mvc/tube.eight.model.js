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
], function defineTubeEightModel(BaseModel, WidgetContentModel) {

  /**
   * Define TubeEight model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class TubeEightModel
   * @constructor
   */
  var TubeEightModel = function TubeEightModel() {

    /**
     * Define preferences
     * @memberOf TubeEightModel
     * @type {{
         *      tubeeightEmbedCode: {type: string, disabled: boolean, value:
         *     undefined, visible: boolean}
         * }}
     */
    this.preferences = {
      tubeeightEmbedCode: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf TubeEightModel
     * @type {{}}
     */
    this.rules = {};
  };

  return TubeEightModel.extend('TubeEightModel', {

    /**
     * Set TubeEight embed code
     * @memberOf TubeEightModel
     * @param {string} embed
     */
    setTubeeightEmbedCode: function setTubeeightEmbedCode(embed) {
      this.setPrefs('tubeeightEmbedCode', embed);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});
