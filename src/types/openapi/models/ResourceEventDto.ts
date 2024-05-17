// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.11.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    Resource,
} from './';

/**
 * @export
 * @interface ResourceEventDto
 */
export interface ResourceEventDto {
    /**
     * Resource event code
     * @type {string}
     * @memberof ResourceEventDto
     */
    event: ResourceEventDtoEventEnum;
    /**
     * @type {Resource}
     * @memberof ResourceEventDto
     */
    producedResource?: Resource;
}

/**
 * @export
 * @enum {string}
 */
export enum ResourceEventDtoEventEnum {
    DiscoveryFinished = 'discoveryFinished'
}
