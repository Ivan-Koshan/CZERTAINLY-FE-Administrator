// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.10.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { RequestAttributeDto } from "./";

/**
 * @export
 * @interface AuthorityInstanceUpdateRequestDto
 */
export interface AuthorityInstanceUpdateRequestDto {
    /**
     * List of Authority instance Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof AuthorityInstanceUpdateRequestDto
     */
    attributes: Array<RequestAttributeDto>;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof AuthorityInstanceUpdateRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}
