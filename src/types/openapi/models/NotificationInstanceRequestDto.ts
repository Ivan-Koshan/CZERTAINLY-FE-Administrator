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
    AttributeMappingDto,
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface NotificationInstanceRequestDto
 */
export interface NotificationInstanceRequestDto {
    /**
     * Notification instance description
     * @type {string}
     * @memberof NotificationInstanceRequestDto
     */
    description?: string;
    /**
     * List of Notification instance Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof NotificationInstanceRequestDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * List of attribute mappings between mapping attributes and (recipient) custom attributes
     * @type {Array<AttributeMappingDto>}
     * @memberof NotificationInstanceRequestDto
     */
    attributeMappings?: Array<AttributeMappingDto>;
    /**
     * Notification instance name
     * @type {string}
     * @memberof NotificationInstanceRequestDto
     */
    name: string;
    /**
     * UUID of Notification provider
     * @type {string}
     * @memberof NotificationInstanceRequestDto
     */
    connectorUuid: string;
    /**
     * Notification instance Kind
     * @type {string}
     * @memberof NotificationInstanceRequestDto
     */
    kind: string;
}
