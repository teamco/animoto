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
], function defineRadikalFotoModel(BaseModel, WidgetContentModel) {

  /**
   * Define RadikalFoto model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class RadikalFotoModel
   * @constructor
   */
  var RadikalFotoModel = function RadikalFotoModel() {

    /**
     * Define preferences
     * @memberOf RadikalFotoModel
     * @type {{
         *      radikalfotoUrl: {type: string, disabled: boolean, value:
         *     undefined, visible: boolean}
         * }}
     */
    this.preferences = {
      radikalfotoUrl: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf RadikalFotoModel
     * @type {{}}
     */
    this.rules = {};
  };

  return RadikalFotoModel.extend('RadikalFotoModel', {

    /**
     * Set RadikalFoto embed code
     * @memberOf RadikalFotoModel
     * @param {string} embed
     */
    setRadikalfotoUrl: function setRadikalfotoUrl(embed) {
      this.setPrefs('radikalfotoUrl', embed);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});
