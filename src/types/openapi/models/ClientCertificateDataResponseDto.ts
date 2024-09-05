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

/**
 * @export
 * @interface ClientCertificateDataResponseDto
 */
export interface ClientCertificateDataResponseDto {
    /**
     * Base64 encoded Certificate content
     * @type {string}
     * @memberof ClientCertificateDataResponseDto
     */
    certificateData?: string;
    /**
     * UUID of Certificate
     * @type {string}
     * @memberof ClientCertificateDataResponseDto
     */
    uuid: string;
}
