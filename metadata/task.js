module.exports.metadata = () => {
  return {
    creatable: true,
    defaultCount: 10,
    defaultOrder: [],
    deletable: true,
    editable: true,
    pagination: true,
    fields: [
      {
        alias: "",
        parent: "",
        displayName: "ID",
        creatable: false,
        editable: false,
        generated: true,
        localizable: false,
        name: "_id",
        nullable: false,
        orderable: false,
        readable: true,
        searchable: false,
        type: "id",
        unique: true,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "UUID",
        creatable: false,
        editable: false,
        generated: true,
        localizable: false,
        name: "uuid",
        nullable: false,
        orderable: false,
        readable: true,
        searchable: false,
        type: "uuid",
        unique: true,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "Name",
        editable: true,
        creatable: true,
        generated: false,
        localizable: false,
        name: "name",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "string",
        unique: false,
        versionable: false,
        versioned: false,
        visible: true
      },
      {
        alias: "",
        parent: "",
        displayName: "Action",
        editable: true,
        creatable: true,
        generated: false,
        localizable: false,
        name: "action",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "string",
        unique: false,
        versionable: false,
        versioned: false,
        visible: true
      },
      {
        alias: "",
        parent: "",
        displayName: "Organization",
        creatable: true,
        editable: true,
        generated: false,
        localizable: false,
        name: "organizationId",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "reference",
        reference: {
          kind: "single",
          to: "organization",
          api: "list"
        },
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "SessionId",
        creatable: true,
        editable: true,
        generated: false,
        localizable: false,
        name: "sessionId",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "reference",
        reference: {
          kind: "single",
          to: "session",
          api: "summary"
        },
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "Settings",
        creatable: true,
        editable: false,
        generated: false,
        localizable: false,
        name: "settings",
        nullable: true,
        orderable: false,
        readable: true,
        searchable: true,
        type: "json",
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "Active",
        creatable: true,
        editable: false,
        generated: true,
        localizable: false,
        name: "active",
        nullable: true,
        orderable: false,
        readable: true,
        searchable: false,
        type: "boolean",
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      }
    ]
  };
}

module.exports.taskUpdate = () => {
  return {
    creatable: true,
    defaultCount: 10,
    defaultOrder: [],
    deletable: true,
    editable: true,
    pagination: true,
    fields: [
      {
        alias: "",
        parent: "",
        displayName: "UUID",
        creatable: false,
        editable: false,
        generated: true,
        localizable: false,
        name: "uuid",
        nullable: false,
        orderable: false,
        readable: true,
        searchable: false,
        type: "uuid",
        unique: true,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "Name",
        editable: true,
        creatable: true,
        generated: false,
        localizable: false,
        name: "name",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "string",
        unique: false,
        versionable: false,
        versioned: false,
        visible: true
      },
      {
        alias: "",
        parent: "",
        displayName: "Action",
        editable: true,
        creatable: true,
        generated: false,
        localizable: false,
        name: "action",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "string",
        unique: false,
        versionable: false,
        versioned: false,
        visible: true
      },
      {
        alias: "",
        parent: "",
        displayName: "Organization",
        creatable: true,
        editable: true,
        generated: false,
        localizable: false,
        name: "organizationId",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "reference",
        reference: {
          kind: "single",
          to: "organization",
          api: "list"
        },
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "SessionId",
        creatable: true,
        editable: true,
        generated: false,
        localizable: false,
        name: "sessionId",
        nullable: false,
        orderable: true,
        readable: true,
        searchable: true,
        type: "reference",
        reference: {
          kind: "single",
          to: "session",
          api: "summary"
        },
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "Settings",
        creatable: true,
        editable: false,
        generated: false,
        localizable: false,
        name: "settings",
        nullable: true,
        orderable: false,
        readable: true,
        searchable: true,
        type: "json",
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      },
      {
        alias: "",
        parent: "",
        displayName: "Active",
        creatable: true,
        editable: false,
        generated: true,
        localizable: false,
        name: "active",
        nullable: true,
        orderable: false,
        readable: true,
        searchable: false,
        type: "boolean",
        unique: false,
        versionable: false,
        versioned: false,
        visible: false
      }
    ]
  };
}