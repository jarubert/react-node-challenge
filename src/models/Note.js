import { Record } from 'immutable';

export default class Note extends Record({
    id: null,
    text: null,
    meetingId: null,
    createdAt: null,
    updatedAt: null
}) {
    constructor(json = {}) {
        const properties = {
            ...json,
            createdAt: json.createdAt ? new Date(json.createdAt) : null,
            updatedAt: json.createdAt ? new Date(json.updatedAt) : null
        };
        super(properties);
    }
}
