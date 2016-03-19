model.jsonModel = {
    groupMemberships: user.properties["alfUserGroups"],
    services: [
        {
            name: "alfresco/services/LoggingService",
            config: {
                loggingPreferences: {
                    enabled: true,
                    all: true,
                    // all: false,
                    // warn: true,
                    // error: true,
                    filter: "tutorial/HelloWorld(.*)"
                }
            }
        },
        "alfresco/services/NavigationService",
        "alfresco/services/LogoutService",
        "alfresco/services/DocumentService",
        "alfresco/services/ActionService",
        "alfresco/services/UploadService",
        "alfresco/services/DialogService"
    ],
    widgets: [
        {
            id: "MAIN_VERTICAL_LAYOUT",
            name: "alfresco/layout/VerticalWidgets",
            config: {
                widgets: [
                    {
                        name: "tutorial/Header"
                    },
                    {
                        id: "HEADER_TITLE_BAR",
                        name: "alfresco/layout/LeftAndRight",
                        className: "share-header-title",
                        config: {
                            semanticWrapper: "header",
                            widgets: [
                                {
                                    id: "HEADER_LOGO",
                                    name: "alfresco/logo/Logo",
                                    align: "left",
                                    config: {
                                        logoClasses: "alfresco-logo-only"
                                    }
                                },
                                {
                                    id: "HEADER_TITLE",
                                    name: "alfresco/header/Title",
                                    align: "left",
                                    config: {
                                        label: "Willkommen zur Aikau-Entwicklung!",
                                        setBrowserTitle: "Home"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        name: "alfresco/buttons/AlfButton",
                        config: {
                            label: "Go to parent folder",
                            iconClass: "alf-folder-up-icon",
                            publishTopic: "ALF_DOCLIST_PARENT_NAV"
                        }
                    },
                    {
                        name: "alfresco/layout/HorizontalWidgets",
                        config: {
                            widgets: [
                                {
                                    name: "alfresco/documentlibrary/AlfDocumentList",
                                    config: {
                                        rootNode: "alfresco://user/home",
                                        rawData: true,
                                        widgets: [
                                            {
                                                name: "alfresco/lists/views/AlfListView",
                                                config: {
                                                    widgets: [
                                                        {
                                                            name: "alfresco/lists/views/layouts/Row",
                                                            config: {
                                                                widgets: [
                                                                    {
                                                                        name: "alfresco/lists/views/layouts/Cell",
                                                                        config: {
                                                                            additionalCssClasses: "mediumpad",
                                                                            widgets: [
                                                                                {
                                                                                    name: "alfresco/renderers/PropertyLink",
                                                                                    config: {
                                                                                        propertyToRender: "node.properties.cm:name",
                                                                                        publishTopic: "ALF_DOCUMENTLIST_PATH_CHANGED",
                                                                                        publishPayloadType: "PROCESS",
                                                                                        useCurrentItemAsPayload: false,
                                                                                        publishPayloadModifiers: ["processCurrentItemTokens"],
                                                                                        publishPayload: {
                                                                                            path: "{location.path}/{location.file}"
                                                                                        },
                                                                                        renderFilter: [
                                                                                            {
                                                                                                property: "node.isContainer",
                                                                                                values: [true]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    name: "alfresco/renderers/PropertyLink",
                                                                                    config: {
                                                                                        propertyToRender: "node.properties.cm:name",
                                                                                        publishTopic: "ALF_NAVIGATE_TO_PAGE",
                                                                                        publishPayloadType: "PROCESS",
                                                                                        useCurrentItemAsPayload: false,
                                                                                        publishPayloadModifiers: ["processCurrentItemTokens","convertNodeRefToUrl"],
                                                                                        publishPayload: {
                                                                                            url: "ap/ws/document/{node.nodeRef}",
                                                                                            type: "SHARE_PAGE_RELATIVE",
                                                                                            target: "CURRENT"
                                                                                        },
                                                                                        renderFilter: [
                                                                                            {
                                                                                                property: "node.isContainer",
                                                                                                values: [false]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "alfresco/documentlibrary/AlfDocument",
                                    config: {
                                        nodeRef: null,
                                        rawData: true,
                                        widgets: [
                                            {
                                                name: "alfresco/preview/AlfDocumentPreview",
                                                config: {
                                                    widgetsForPluginsOverrides: [
                                                        {
                                                            id: "PdfJs",
                                                            replace: true,
                                                            name: "alfresco/preview/PdfJs/PdfJs",
                                                            config: {}
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
//        {
//            name: "alfresco/logging/SubscriptionLog"
//        }
    ]
};
