// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface AddRaProfileRequestDto
 */
export interface AddRaProfileRequestDto {
    /**
     * RA Profile name
     * @type {string}
     * @memberof AddRaProfileRequestDto
     */
    name: string;
    /**
     * RA Profile description
     * @type {string}
     * @memberof AddRaProfileRequestDto
     */
    description?: string;
    /**
     * List of Attributes to create RA Profile
     * @type {Array<RequestAttributeDto>}
     * @memberof AddRaProfileRequestDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof AddRaProfileRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
    /**
     * Enabled flag - true = enabled; false = disabled
     * @type {boolean}
     * @memberof AddRaProfileRequestDto
     */
    enabled?: boolean;
}
