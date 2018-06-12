/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

/**
 * @constant Empty
 * @type {module.Empty|*}
 */
const Empty = require('../empty/empty.js');

/**
 * @class Image
 * @type {module.Image}
 */
module.exports = class Image extends Empty {

  /**
   * @param name
   * @param containment
   * @param [opts]
   * @constructor
   */
  constructor(name, containment, opts) {
    super(name || 'Image', containment, opts);
  };

  /**
   * @memberOf Image
   * @param opts
   */
  initContent(opts) {

    /**
     * Define defaults
     * @type {{
     *  plugin: boolean,
     *  html: {
     *    style: string,
     *    header: boolean,
     *    footer: boolean,
     *    floating: boolean,
     *    padding: {top: number, right: number, bottom: number, left: number}
     *  }
     * }}
     */
    const DEFAULTS = {
      plugin: true,
      html: {
        style: 'default',
        header: false,
        footer: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    };

    /**
     * @constant components
     * @type {{Controller, Model, View, EventManager, Permission}}
     */
    const components = Image.fetchComponents();

    /**
     * @constant MVC
     * @type {module.MVC}
     */
    const MVC = require('../../../core/lib/modules/MVC.js');

    /**
     * @type {module.MVC}
     */
    new MVC({
      scope: this,
      config: [
        {uuid: this.containment.model.getContentUUID()},
        DEFAULTS
      ],
      components: [
        components.Controller,
        components.Model,
        components.View,
        components.EventManager,
        components.Permission
      ],
      render: true
    });

    this.observer.publish(this.eventManager.eventList.initWidget, opts);
  }

  /**
   * @method init
   * @memberOf Image
   * @static
   * @returns {*}
   */
  static fetchComponents() {

    /**
     * @constant ImageController
     * @type {module.ImageController}
     */
    const ImageController = require('./mvc/image.controller.js');

    /**
     * @constant ImageModel
     * @type {module.ImageModel}
     */
    const ImageModel = require('./mvc/image.model.js');

    /**
     * @constant ImageView
     * @type {module.ImageView}
     */
    const ImageView = require('./mvc/image.view.js');

    /**
     * @constant ImageEventManager
     * @type {module.ImageEventManager}
     */
    const ImageEventManager = require('./mvc/image.event.manager.js');

    /**
     * @constant ImagePermission
     * @type {module.ImagePermission}
     */
    const ImagePermission = require('./mvc/image.permission.js');

    return {
      Controller: ImageController,
      Model: ImageModel,
      View: ImageView,
      EventManager: ImageEventManager,
      Permission: ImagePermission
    };
  }
};