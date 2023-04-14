// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.7.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ResponseAttributeDto } from "./";

/**
 * @export
 * @interface RaProfileScepDetailResponseDto
 */
export interface RaProfileScepDetailResponseDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof RaProfileScepDetailResponseDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof RaProfileScepDetailResponseDto
     */
    name: string;
    /**
     * SCEP availability flag - true = yes; false = no
     * @type {boolean}
     * @memberof RaProfileScepDetailResponseDto
     */
    scepAvailable: boolean;
    /**
     * SCEP URL
     * @type {string}
     * @memberof RaProfileScepDetailResponseDto
     */
    url?: string;
    /**
     * List of Attributes to issue Certificate
     * @type {Array<ResponseAttributeDto>}
     * @memberof RaProfileScepDetailResponseDto
     */
    issueCertificateAttributes?: Array<ResponseAttributeDto>;
}
