import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AttributeDescriptorModel, DataAttributeModel } from 'types/attributes';
import { SearchRequestModel } from 'types/certificate';
import { ConnectorResponseModel } from 'types/connectors';
import { NotificationInstanceModel, NotificationInstanceRequestModel, NotificationModel } from 'types/notifications';
import { ListMappingAttributesRequest } from 'types/openapi';
import { createFeatureSelector } from 'utils/ducks';

export type State = {
    overviewNotifications: NotificationModel[];
    notifications: NotificationModel[];
    notificationInstances: NotificationInstanceModel[];
    notificationInstanceDetail?: NotificationInstanceModel;
    notificationInstanceProviders?: ConnectorResponseModel[];
    notificationProviderAttributesDescriptors?: AttributeDescriptorModel[];
    deleteErrorMessage?: string;
    mappingAttributes?: DataAttributeModel[];

    isFetchingMappingAttributes: boolean;
    isFetchingnotificationProviderAttributesDescriptors: boolean;
    isDeletingNotificationInstance: boolean;
    isFetchingNotificationProviders: boolean;
    isFetchingNotificationInstanceDetail: boolean;
    isFetchingOverview: boolean;
    isFetchingNotificationInstances: boolean;
    isCreatingNotificationInstance: boolean;
    isEditingNotificationInstance: boolean;
    isDeleting: boolean;
    isMarking: boolean;
};

export const initialState: State = {
    overviewNotifications: [],
    notifications: [],
    notificationInstances: [],

    isFetchingMappingAttributes: false,
    isFetchingnotificationProviderAttributesDescriptors: false,
    isDeletingNotificationInstance: false,
    isFetchingNotificationProviders: false,
    isFetchingNotificationInstanceDetail: false,
    isFetchingNotificationInstances: false,
    isCreatingNotificationInstance: false,
    isFetchingOverview: false,
    isEditingNotificationInstance: false,
    isDeleting: false,
    isMarking: false,
};

export const slice = createSlice({
    name: 'notifications',

    initialState,

    reducers: {
        listOverviewNotifications: (state, action: PayloadAction<void>) => {
            state.isFetchingOverview = true;
        },

        listOverviewNotificationsSuccess: (state, action: PayloadAction<NotificationModel[]>) => {
            state.isFetchingOverview = false;
            state.overviewNotifications = action.payload;
        },

        listOverviewNotificationsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingOverview = false;
        },

        listNotifications: (state, action: PayloadAction<{ unread: boolean; pagination: SearchRequestModel }>) => {
            state.notifications = [];
        },

        listNotificationsSuccess: (state, action: PayloadAction<NotificationModel[]>) => {
            state.notifications = action.payload;
        },

        deleteNotification: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isDeleting = true;
        },

        deleteNotificationSuccess: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isDeleting = false;

            const index = state.notifications.findIndex((a) => a.uuid === action.payload.uuid);
            if (index !== -1) state.notifications.splice(index, 1);
        },

        deleteNotificationFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isDeleting = false;
        },

        markAsReadNotification: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isMarking = true;
        },

        markAsReadNotificationSuccess: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isMarking = false;

            const index = state.notifications.findIndex((a) => a.uuid === action.payload.uuid);
            if (index !== -1) state.notifications[index].readAt = Date.now().toString();
        },

        markAsReadNotificationFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isMarking = false;
        },
        listNotificationInstances: (state, action: PayloadAction<void>) => {
            state.isFetchingNotificationInstances = true;
            state.notificationInstances = [];
        },
        listNotificationInstancesSuccess: (state, action: PayloadAction<NotificationInstanceModel[]>) => {
            state.notificationInstances = action.payload;
            state.isFetchingNotificationInstances = false;
        },
        listNotificationInstancesFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingNotificationInstances = false;
        },

        listNotificationProviders: (state, action: PayloadAction<void>) => {
            state.isFetchingNotificationProviders = true;
        },

        listNotificationProvidersSuccess: (state, action: PayloadAction<{ providers: ConnectorResponseModel[] }>) => {
            state.isFetchingNotificationProviders = false;
            state.notificationInstanceProviders = action.payload.providers;
        },

        listNotificationProvidersFailure: (state, action: PayloadAction<{ error: string }>) => {
            state.isFetchingNotificationProviders = false;
        },

        getNotificationAttributesDescriptors: (state, action: PayloadAction<{ uuid: string; kind: string }>) => {
            state.notificationProviderAttributesDescriptors = [];
            state.isFetchingnotificationProviderAttributesDescriptors = true;
        },

        getNotificationAttributesDescriptorsSuccess: (
            state,
            action: PayloadAction<{ attributeDescriptor: AttributeDescriptorModel[] }>,
        ) => {
            state.notificationProviderAttributesDescriptors = action.payload.attributeDescriptor;
            state.isFetchingnotificationProviderAttributesDescriptors = false;
        },

        getNotificationAttributeDescriptorsFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingnotificationProviderAttributesDescriptors = false;
        },

        getNotificationInstance: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isFetchingNotificationInstanceDetail = true;
        },

        getNotificationInstanceSuccess: (state, action: PayloadAction<NotificationInstanceModel>) => {
            state.notificationInstanceDetail = action.payload;
            state.isFetchingNotificationInstanceDetail = false;
        },

        getNotificationInstanceFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingNotificationInstanceDetail = false;
        },

        createNotificationInstance: (state, action: PayloadAction<NotificationInstanceRequestModel>) => {
            state.isCreatingNotificationInstance = true;
        },

        createNotificationInstanceSuccess: (state, action: PayloadAction<void>) => {
            state.isCreatingNotificationInstance = false;
        },

        createNotificationInstanceFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isCreatingNotificationInstance = false;
        },

        editNotificationInstance: (
            state,
            action: PayloadAction<{ notificationInstance: NotificationInstanceRequestModel; uuid: string }>,
        ) => {
            state.isEditingNotificationInstance = true;
        },

        editNotificationInstanceSuccess: (state, action: PayloadAction<void>) => {
            state.isEditingNotificationInstance = false;
        },

        editNotificationInstanceFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isEditingNotificationInstance = false;
        },

        deleteNotificationInstance: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isDeletingNotificationInstance = true;
            state.deleteErrorMessage = undefined;
        },

        deleteNotificationInstanceSuccess: (state, action: PayloadAction<{ uuid: string }>) => {
            state.isDeletingNotificationInstance = false;
            const index = state.notificationInstances.findIndex((a) => a.uuid === action.payload.uuid);
            if (index !== -1) state.notificationInstances.splice(index, 1);
            state.deleteErrorMessage = undefined;
        },

        deleteNotificationInstanceFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isDeletingNotificationInstance = false;
            state.deleteErrorMessage = action.payload.error;
        },

        clearDeleteErrorMessages: (state, action: PayloadAction<void>) => {
            state.deleteErrorMessage = undefined;
        },

        clearNotificationInstanceDetail: (state, action: PayloadAction<void>) => {
            state.notificationInstanceDetail = undefined;
        },

        listMappingAttributes: (state, action: PayloadAction<ListMappingAttributesRequest>) => {
            state.isFetchingMappingAttributes = true;
        },

        listMappingAttributesSuccess: (state, action: PayloadAction<{ mappingAttributes: DataAttributeModel[] }>) => {
            state.isFetchingMappingAttributes = false;
            state.mappingAttributes = action.payload.mappingAttributes;
        },

        listMappingAttributesFailure: (state, action: PayloadAction<{ error: string | undefined }>) => {
            state.isFetchingMappingAttributes = false;
        },
    },
});

const state = createFeatureSelector<State>(slice.name);

const overviewNotifications = createSelector(state, (state) => state.overviewNotifications);
const notifications = createSelector(state, (state) => state.notifications);
const notificationInstances = createSelector(state, (state) => state.notificationInstances);
const notificationInstanceDetail = createSelector(state, (state) => state.notificationInstanceDetail);
const notificationInstanceProviders = createSelector(state, (state) => state.notificationInstanceProviders);
const notificationProviderAttributesDescriptors = createSelector(state, (state) => state.notificationProviderAttributesDescriptors);
const mappingAttributes = createSelector(state, (state) => state.mappingAttributes);

const isFetchingMappingAttributes = createSelector(state, (state) => state.isFetchingMappingAttributes);
const isFetchingNotificationProviders = createSelector(state, (state) => state.isFetchingNotificationProviders);
const deleteErrorMessage = createSelector(state, (state) => state.deleteErrorMessage);
const isCreatingNotificationInstance = createSelector(state, (state) => state.isCreatingNotificationInstance);
const isEditingNotificationInstance = createSelector(state, (state) => state.isEditingNotificationInstance);
const isFetchingNotificationInstanceDetail = createSelector(state, (state) => state.isFetchingNotificationInstanceDetail);
const isFetchingNotificationInstances = createSelector(state, (state) => state.isFetchingNotificationInstances);
const isFetchingOverview = createSelector(state, (state) => state.isFetchingOverview);
const isDeleting = createSelector(state, (state) => state.isDeleting);
const isMarking = createSelector(state, (state) => state.isMarking);

export const selectors = {
    state,
    notificationInstanceDetail,
    overviewNotifications,
    notifications,
    notificationInstances,
    notificationInstanceProviders,
    notificationProviderAttributesDescriptors,
    mappingAttributes,

    isFetchingMappingAttributes,
    deleteErrorMessage,
    isFetchingNotificationProviders,
    isCreatingNotificationInstance,
    isEditingNotificationInstance,
    isFetchingNotificationInstanceDetail,
    isFetchingNotificationInstances,
    isFetchingOverview,
    isDeleting,
    isMarking,
};

export const actions = slice.actions;

export default slice.reducer;
