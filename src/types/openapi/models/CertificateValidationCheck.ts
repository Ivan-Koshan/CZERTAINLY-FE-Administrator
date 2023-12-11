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

/**
 * Certificate validation check type
 * @export
 * @enum {string}
 */
export enum CertificateValidationCheck {
    CertificateChain = "certificate_chain",
    Signature = "signature",
    CertificateValidity = "certificate_validity",
    OcspVerification = "ocsp_verification",
    CrlVerification = "crl_verification",
    BasicConstraints = "basic_constraints",
    KeyUsage = "key_usage",
}
