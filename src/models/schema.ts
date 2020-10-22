import {
    Schema,
    SchemaTypeOpts
} from 'mongoose';

interface Fields {
    [field: string]: SchemaTypeOpts<any>;
}

interface At {
    type: any;
    default: any;
}

/*创建集合*/
export const CreateSchema = (fields: Fields) => {
    const _atType: At = {
        type: Date,
        default: Date.now()
    };

    /*默认增加创建时间和更新时间*/
    const _defaultFields = {
        createdAt: _atType,
        updatedAt: _atType
    };

    const _fields = {
        ...fields,
        ..._defaultFields,
    };

    const _timestamps = {
        createdAt: `createdAt`,
        updatedAt: `updatedAt`
    };

    return new Schema(_fields, {
        timestamps: _timestamps
    });
};
