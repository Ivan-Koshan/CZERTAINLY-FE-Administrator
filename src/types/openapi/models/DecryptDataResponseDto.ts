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

import type { CipherResponseData } from "./";

/**
 * @export
 * @interface DecryptDataResponseDto
 */
export interface DecryptDataResponseDto {
    /**
     * Decrypted data
     * @type {Array<CipherResponseData>}
     * @memberof DecryptDataResponseDto
     */
    decryptedData: Array<CipherResponseData>;
}
