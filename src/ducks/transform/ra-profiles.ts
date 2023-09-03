import {
    ComplianceProfileSimplifiedDto,
    ComplianceProfileSimplifiedModel,
    RaProfileAcmeDetailResponseDto,
    RaProfileAcmeDetailResponseModel,
    RaProfileActivateAcmeRequestDto,
    RaProfileActivateAcmeRequestModel,
    RaProfileActivateScepRequestDto,
    RaProfileActivateScepRequestModel,
    RaProfileAddRequestDto,
    RaProfileAddRequestModel,
    RaProfileEditRequestDto,
    RaProfileEditRequestModel,
    RaProfileResponseDto,
    RaProfileResponseModel,
    RaProfileScepDetailResponseDto,
    RaProfileScepDetailResponseModel,
} from "types/ra-profiles";
import { transformAttributeRequestModelToDto, transformAttributeResponseDtoToModel } from "./attributes";

export function transformRaProfileResponseDtoToModel(raResponse: RaProfileResponseDto): RaProfileResponseModel {
    return {
        ...raResponse,
        attributes: raResponse?.attributes?.length ? raResponse.attributes.map(transformAttributeResponseDtoToModel) : [],
        customAttributes: raResponse.customAttributes?.map(transformAttributeResponseDtoToModel),
    };
}

export function transformRaProfileActivateAcmeRequestModelToDto(
    raAcmeRequest: RaProfileActivateAcmeRequestModel,
): RaProfileActivateAcmeRequestDto {
    return {
        ...raAcmeRequest,
        issueCertificateAttributes: raAcmeRequest.issueCertificateAttributes.map(transformAttributeRequestModelToDto),
        revokeCertificateAttributes: raAcmeRequest.revokeCertificateAttributes.map(transformAttributeRequestModelToDto),
    };
}

export function transformRaProfileAcmeDetailResponseDtoToModel(
    raAcmeResponse: RaProfileAcmeDetailResponseDto,
): RaProfileAcmeDetailResponseModel {
    return {
        ...raAcmeResponse,
        issueCertificateAttributes: raAcmeResponse.issueCertificateAttributes?.map(transformAttributeResponseDtoToModel),
        revokeCertificateAttributes: raAcmeResponse.revokeCertificateAttributes?.map(transformAttributeResponseDtoToModel),
    };
}

export function transformRaProfileActivateScepRequestModelToDto(
    raScepRequest: RaProfileActivateScepRequestModel,
): RaProfileActivateScepRequestDto {
    return {
        ...raScepRequest,
        issueCertificateAttributes: raScepRequest.issueCertificateAttributes.map(transformAttributeRequestModelToDto),
    };
}

export function transformRaProfileScepDetailResponseDtoToModel(
    raScepResponse: RaProfileScepDetailResponseDto,
): RaProfileScepDetailResponseModel {
    return {
        ...raScepResponse,
        issueCertificateAttributes: raScepResponse.issueCertificateAttributes?.map(transformAttributeResponseDtoToModel),
    };
}

export function transformRaProfileAddRequestModelToDto(raAddReq: RaProfileAddRequestModel): RaProfileAddRequestDto {
    return {
        ...raAddReq,
        attributes: raAddReq.attributes.map(transformAttributeRequestModelToDto),
        customAttributes: raAddReq.customAttributes?.map(transformAttributeRequestModelToDto),
    };
}

export function transformRaProfileEditRequestModelToDto(raEditReq: RaProfileEditRequestModel): RaProfileEditRequestDto {
    return {
        ...raEditReq,
        attributes: raEditReq.attributes.map(transformAttributeRequestModelToDto),
        customAttributes: raEditReq.customAttributes?.map(transformAttributeRequestModelToDto),
    };
}

export function transformComplianceProfileSimplifiedDtoToModel(
    complianceProfile: ComplianceProfileSimplifiedDto,
): ComplianceProfileSimplifiedModel {
    return { ...complianceProfile };
}
