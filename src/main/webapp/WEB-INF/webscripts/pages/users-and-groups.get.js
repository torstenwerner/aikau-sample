var options = [];
var result = remote.call("/api/people?filter=");
if (result.status.code == status.STATUS_OK)
{
    var rawData = JSON.parse(result);
    if (rawData && rawData.people)
    {
        var people = rawData.people;
        for (var i=0; i<people.length; i++)
        {
            options.push({
                value: people[i].userName,
                label: people[i].firstName + " " + people[i].lastName + " (" + people[i].userName + ")"
            });
        }
    }
}

model.jsonModel = {
    services: [
        "alfresco/services/CrudService",
        "alfresco/services/DialogService",
        "tutorial/UserAndGroupService",
        "alfresco/services/OptionsService"
    ],
    widgets: [
        {
            name: "alfresco/buttons/AlfButton",
            config: {
                label: "Create New Group",
                publishTopic: "ALF_CREATE_FORM_DIALOG_REQUEST",
                publishPayload: {
                    dialogTitle: "Create Group",
                    dialogConfirmationButtonTitle: "Create",
                    dialogCancellationButtonTitle: "Cancel",
                    formSubmissionTopic: "TUTORIAL_CREATE_GROUP",
                    fixedWidth: true,
                    widgets: [
                        {
                            name: "alfresco/forms/controls/TextBox",
                            config: {
                                fieldId: "ID",
                                label: "Identifier",
                                name: "groupId",
                                description: "Enter a unique identifier for the group. Only alphanumeric characters are allowed",
                                requirementConfig: {
                                    initialValue: true
                                },
                                validationConfig: [
                                    {
                                        validation: "regex",
                                        regex: "^[A-Za-z0-9]+$",
                                        errorMessage: "Alphanumeric characters only"
                                    }
                                ]
                            }
                        },
                        {
                            name: "alfresco/forms/controls/TextBox",
                            config: {
                                fieldId: "DISPLAYNAME",
                                label: "Display name",
                                name: "displayName"
                            }
                        }
                    ]
                }
            }
        },
        {
            name: "alfresco/lists/AlfList",
            config: {
                loadDataPublishTopic: "ALF_CRUD_GET_ALL",
                loadDataPublishPayload: {
                    url: "api/groups?sortBy=displayName&zone=APP.DEFAULT"
                },
                itemsProperty: "data",
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
                                                    widgets: [
                                                        {
                                                            name: "alfresco/renderers/PropertyLink",
                                                            config: {
                                                                propertyToRender: "displayName",
                                                                useCurrentItemAsPayload: false,
                                                                publishTopic: "ALF_CREATE_DIALOG_REQUEST",
                                                                publishPayloadType: "PROCESS",
                                                                publishPayloadModifiers: ["processCurrentItemTokens"],
                                                                publishPayload: {
                                                                    dialogTitle: "{displayName}",
                                                                    fixedWidth: true,
                                                                    widgetsContent: [
                                                                        {
                                                                            name: "alfresco/forms/Form",
                                                                            config: {
                                                                                okButtonLabel: "Add User",
                                                                                okButtonPublishTopic: "TUTORIAL_ADD_USER_TO_GROUP",
                                                                                okButtonPublishPayload: {
                                                                                    groupId: "{shortName}",
                                                                                    pubSubScope: "GROUP_USERS_"
                                                                                },
                                                                                okButtonPublishGlobal: true,
                                                                                showCancelButton: false,
                                                                                widgets: [
                                                                                    {
                                                                                        name: "alfresco/forms/controls/Select",
                                                                                        config: {
                                                                                            label: "User",
                                                                                            description: "Select a user to add to the group",
                                                                                            name: "userName",
                                                                                            optionsConfig: {
                                                                                                fixed: options
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            name: "alfresco/lists/AlfList",
                                                                            config: {
                                                                                pubSubScope: "GROUP_USERS_",
                                                                                waitForPageWidgets: false,
                                                                                loadDataPublishTopic: "ALF_CRUD_GET_ALL",
                                                                                loadDataPublishPayload: {
                                                                                    url: "api/groups/{shortName}/children?sortBy=displayName&maxItems=50&skipCount=0"
                                                                                },
                                                                                itemsProperty: "data",
                                                                                widgets: [
                                                                                    {
                                                                                        name: "alfresco/documentlibrary/views/AlfDocumentListView",
                                                                                        config: {
                                                                                            widgets: [
                                                                                                {
                                                                                                    name: "alfresco/lists/views/layouts/Row",
                                                                                                    config: {
                                                                                                        widgets: [
                                                                                                            {
                                                                                                                name: "alfresco/lists/views/layouts/Cell",
                                                                                                                config: {
                                                                                                                    widgets: [
                                                                                                                        {
                                                                                                                            name: "alfresco/renderers/Property",
                                                                                                                            config: {
                                                                                                                                propertyToRender: "displayName"
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
                                                                        }
                                                                    ]
                                                                }
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
        }
    ]
};
