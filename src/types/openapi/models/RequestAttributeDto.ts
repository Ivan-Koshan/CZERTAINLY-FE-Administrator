// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { BaseAttributeContentDto } from "./";

/**
 * Request attribute to send attribute content for object
 * @export
 * @interface RequestAttributeDto
 */
export interface RequestAttributeDto {
    /**
     * UUID of the Attribute
     * @type {string}
     * @memberof RequestAttributeDto
     */
    uuid?: string;
    /**
     * Name of the Attribute
     * @type {string}
     * @memberof RequestAttributeDto
     */
    name: string;
    /**
     * Content of the Attribute
     * @type {Array<BaseAttributeContentDto>}
     * @memberof RequestAttributeDto
     */
    content: Array<BaseAttributeContentDto>;
}
