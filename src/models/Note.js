import { Record } from 'immutable';

export default class Note extends Record({
    id: null,
    text: null,
    meetingId: null,
    createdAt: null
}) {
    constructor(json = {}) {
        const properties = {
            ...json,
            createdAt: json.createdAt ? new Date(json.createdAt) : null
        };
        super(properties);
    }
}
