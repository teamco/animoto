/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

import './image.scss';
import image from './images/image.png';

import {Empty} from '../empty/empty';
import {ImageController} from './mvc/image.controller';
import {ImageModel} from './mvc/image.model';
import {ImageView} from './mvc/image.view';
import {ImageEventManager} from './mvc/image.event.manager';
import {ImagePermission} from './mvc/image.permission';
import {MVC} from '../../../modules/MVC';

/**
 * @class Image
 * @type {Image}
 * @extends Empty
 */
export class Image extends Empty {

  /**
   * @param name
   * @param containment
   * @param [opts]
   * @constructor
   */
  constructor(name, containment, opts) {
    super(name || 'Image', containment, opts);

    /**
     * Define image
     * @property Image
     */
    this.image = image;
  }

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
     * @type {MVC}
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
    return {
      Controller: ImageController,
      Model: ImageModel,
      View: ImageView,
      EventManager: ImageEventManager,
      Permission: ImagePermission
    };
  }
}