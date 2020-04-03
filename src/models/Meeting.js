import { Record } from 'immutable';

export default class Meeting extends Record({
    id: null,
    title: null,
    startAt: null,
    createdAt: null
}) {
    constructor(json = {}) {
        const properties = {
            ...json,
            createdAt: json.createdAt ? new Date(json.createdAt) : null,
            startAt: json.startAt ? new Date(json.startAt) : null
        };
        super(properties);
    }
}
