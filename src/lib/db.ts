import { Redis } from '@upstash/redis';

function getRedisCredentials() {
    const restUrl = process.env.UPSTASH_REDIS_REST_URL;
    const restToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!restUrl || restUrl.length === 0) {
        throw new Error('Missign google client id');
    }

    if (!restToken || restToken.length === 0) {
        throw new Error('Missing google client secret');
    }

    return { restUrl, restToken };
}

const credentials = getRedisCredentials();

export const db = new Redis({
    url: credentials.restUrl,
    token: credentials.restToken,
});
