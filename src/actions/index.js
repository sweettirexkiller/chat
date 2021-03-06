import * as types from '../constants/actionTypes';
import { runInNewContext } from 'vm';

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (message, author) = ({
    type: types.ADD_MESSAGE, 
    id: nextMessageId++,
    message,
    author
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})