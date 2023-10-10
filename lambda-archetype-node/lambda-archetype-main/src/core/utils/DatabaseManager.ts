import mysql from 'mysql2/promise';
import config from '../config';

const DatabaseManager = mysql.createPool(config.DATABASE[config.NODE_ENVIRONMENT]);

export default DatabaseManager;
