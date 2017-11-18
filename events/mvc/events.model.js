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
], function defineEventsModel(BaseModel, WidgetContentModel) {

  /**
   * Define Events model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class EventsModel
   * @constructor
   */
  var EventsModel = function EventsModel() {

    /**
     * Define preferences
     * @property EventsModel
     * @type {{eventsJson: {type: string, disabled: boolean, value: undefined,
     *     visible: boolean}}}
     */
    this.preferences = {
      eventsJson: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @property EventsModel
     * @type {{}}
     */
    this.rules = {};
  };

  return EventsModel.extend('EventsModel', {

    /**
     * Set events json
     * @memberOf EventsModel
     * @param {string} json
     */
    setEventsJson: function setEventsJson(json) {
      this.setPrefs('eventsJson', json);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});