/**
 * The new BAuA statistics table widget.
 */

define(["dojo/_base/declare",
        "alfresco/core/ProcessWidgets"],
    function (declare, ProcessWidgets) {

        var cellPadding = "mediumpad";
        return declare([ProcessWidgets], {
            widgets: [
                {
                    name: "alfresco/lists/AlfSortablePaginatedList",
                    config: {
                        loadDataPublishTopic: "STATISTICS_GET",
                        itemsProperty: "records",
                        sortField: "material",
                        currentPageSize: 50,
                        startIndexProperty: "paging.skipCount",
                        totalResultsProperty: "paging.totalItems",
                        widgets: [
                            {
                                name: "alfresco/lists/views/AlfListView",
                                config: {
                                    widgetsForHeader: [
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: ""
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "lfd Nr.",
                                                sortable: true,
                                                sortValue: "index"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "Sys-ID",
                                                sortable: true,
                                                sortValue: "procedureSerialNr"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "Kürzel",
                                                sortable: true,
                                                sortValue: "unit"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "Stoffname",
                                                sortable: true,
                                                sortValue: "material"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "GZ",
                                                sortable: true,
                                                sortValue: "gz"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "CAS",
                                                sortable: true,
                                                sortValue: "cas"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "Redaktionsstart",
                                                sortable: true,
                                                sortValue: "startDate"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "Redaktionsschluss",
                                                sortable: true,
                                                sortValue: "endDate"
                                            }
                                        },
                                        {
                                            name: "alfresco/lists/views/layouts/HeaderCell",
                                            config: {
                                                label: "BW-Versionierung",
                                                sortable: true,
                                                sortValue: "iteration"
                                            }
                                        }
                                    ],
                                    additionalCssClasses: "bordered",
                                    widgets: [
                                        {
                                            name: "alfresco/lists/views/layouts/Row",
                                            config: {
                                                zebraStriping: true,
                                                widgets: [
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/Selector"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'index'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'procedureSerialNr'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'unit'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'material'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'gz'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'cas'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'startDate'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'endDate'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        name: "alfresco/lists/views/layouts/Cell",
                                                        config: {
                                                            additionalCssClasses: cellPadding,
                                                            widgets: [
                                                                {
                                                                    name: "alfresco/renderers/PropertyLink",
                                                                    config: {
                                                                        propertyToRender: 'iteration'
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
                    name: "alfresco/lists/Paginator",
                    config: {
                        documentsPerPage: 50,
                        pageSizes: [10, 25, 50, 100]
                    }
                }
            ]
        });
    });
