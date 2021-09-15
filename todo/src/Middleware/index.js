import Checker from './Checker';
import Logger from './Logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

let checker = Checker.checker;
let logger  = Logger.logger;

export default applyMiddleware(
    thunk,
    checker,
    logger
);
