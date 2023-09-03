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

import type { Observable } from "rxjs";
import type { AjaxResponse } from "rxjs/ajax";
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from "../runtime";
import type { OperationOpts, HttpHeaders } from "../runtime";
import type {
    AuthenticationServiceExceptionDto,
    ErrorMessageDto,
    NameAndUuidDto,
    Resource,
    ResourceDetailDto,
    UpdateUserRequestDto,
    UserDetailDto,
} from "../models";

export interface GetObjectsForResourceRequest {
    resourceName: Resource;
}

export interface UpdateUserProfileRequest {
    updateUserRequestDto: UpdateUserRequestDto;
}

/**
 * no description
 */
export class AuthenticationManagementApi extends BaseAPI {
    /**
     * Get all Resources
     */
    getAllResources(): Observable<Array<ResourceDetailDto>>;
    getAllResources(opts?: OperationOpts): Observable<AjaxResponse<Array<ResourceDetailDto>>>;
    getAllResources(opts?: OperationOpts): Observable<Array<ResourceDetailDto> | AjaxResponse<Array<ResourceDetailDto>>> {
        return this.request<Array<ResourceDetailDto>>(
            {
                url: "/v1/auth/resources",
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Get List of objects for Object Access
     */
    getObjectsForResource({ resourceName }: GetObjectsForResourceRequest): Observable<Array<NameAndUuidDto>>;
    getObjectsForResource(
        { resourceName }: GetObjectsForResourceRequest,
        opts?: OperationOpts,
    ): Observable<AjaxResponse<Array<NameAndUuidDto>>>;
    getObjectsForResource(
        { resourceName }: GetObjectsForResourceRequest,
        opts?: OperationOpts,
    ): Observable<Array<NameAndUuidDto> | AjaxResponse<Array<NameAndUuidDto>>> {
        throwIfNullOrUndefined(resourceName, "resourceName", "getObjectsForResource");

        return this.request<Array<NameAndUuidDto>>(
            {
                url: "/v1/auth/resources/{resourceName}/objects".replace("{resourceName}", encodeURI(resourceName)),
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Profile Authorization
     */
    profile(): Observable<UserDetailDto>;
    profile(opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>;
    profile(opts?: OperationOpts): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        return this.request<UserDetailDto>(
            {
                url: "/v1/auth/profile",
                method: "GET",
            },
            opts?.responseOpts,
        );
    }

    /**
     * Update User Profile
     */
    updateUserProfile({ updateUserRequestDto }: UpdateUserProfileRequest): Observable<UserDetailDto>;
    updateUserProfile({ updateUserRequestDto }: UpdateUserProfileRequest, opts?: OperationOpts): Observable<AjaxResponse<UserDetailDto>>;
    updateUserProfile(
        { updateUserRequestDto }: UpdateUserProfileRequest,
        opts?: OperationOpts,
    ): Observable<UserDetailDto | AjaxResponse<UserDetailDto>> {
        throwIfNullOrUndefined(updateUserRequestDto, "updateUserRequestDto", "updateUserProfile");

        const headers: HttpHeaders = {
            "Content-Type": "application/json",
        };

        return this.request<UserDetailDto>(
            {
                url: "/v1/auth/profile",
                method: "PUT",
                headers,
                body: updateUserRequestDto,
            },
            opts?.responseOpts,
        );
    }
}
