// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.5.1-SNAPSHOT
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
 * @interface EditKeyRequestDto
 */
export interface EditKeyRequestDto {
    /**
     * UUID of the token profile
     * @type {string}
     * @memberof EditKeyRequestDto
     */
    tokenProfileUuid: string;
    /**
     * Name of the Cryptographic Key
     * @type {string}
     * @memberof EditKeyRequestDto
     */
    name: string;
    /**
     * Description of the Cryptographic Key
     * @type {string}
     * @memberof EditKeyRequestDto
     */
    description: string;
    /**
     * Key Owner
     * @type {string}
     * @memberof EditKeyRequestDto
     */
    owner?: string;
    /**
     * UUID of the group
     * @type {string}
     * @memberof EditKeyRequestDto
     */
    groupUuid?: string;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof EditKeyRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
}