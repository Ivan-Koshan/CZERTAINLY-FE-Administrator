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
    RequestAttributeDto,
} from './';

/**
 * @export
 * @interface EntityInstanceUpdateRequestDto
 */
export interface EntityInstanceUpdateRequestDto {
    /**
     * List of Entity instance Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof EntityInstanceUpdateRequestDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof EntityInstanceUpdateRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}
