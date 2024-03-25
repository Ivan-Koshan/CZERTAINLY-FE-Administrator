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

/**
 * @export
 * @interface RequestAttributeCallback
 */
export interface RequestAttributeCallback {
    /**
     * UUID of the Attribute
     * @type {string}
     * @memberof RequestAttributeCallback
     */
    uuid?: string;
    /**
     * Name of the Attribute
     * @type {string}
     * @memberof RequestAttributeCallback
     */
    name: string;
    /**
     * Map of path variables supported by the callback method
     * @type {{ [key: string]: object; }}
     * @memberof RequestAttributeCallback
     */
    pathVariable?: { [key: string]: object; };
    /**
     * Map of the query parameters supported by the callback method
     * @type {{ [key: string]: object; }}
     * @memberof RequestAttributeCallback
     */
    requestParameter?: { [key: string]: object; };
    /**
     * Request body for the callback method
     * @type {{ [key: string]: object; }}
     * @memberof RequestAttributeCallback
     */
    body?: { [key: string]: object; };
}
