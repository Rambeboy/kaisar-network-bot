import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent'; 
import { checkAndClaimTask, dailyCheckin } from '../core/task.js';
import { getProxy, getId, getToken } from '../core/file.js';
import { getMiningData } from '../core/script.js';
import { logger } from './logger.js';
import { banner } from './helper.js';
import { headers } from '../core/task.js';
import readline from 'readline';
import fs from 'fs';

export { axios, HttpsProxyAgent, checkAndClaimTask, dailyCheckin, getProxy, getId, getToken, getMiningData, logger, banner, headers, readline, fs };