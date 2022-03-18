import * as FileSystem from 'expo-file-system'

export const CACHE_FOLDER = `${FileSystem.cacheDirectory}`

export default class FileCacheManager {
    static async getOrCache(uri, key, changedTimestamp = undefined) {
        const fileLocation = FileCacheManager.getCacheKey(key);
        const fileInfo = await FileSystem.getInfoAsync(fileLocation);
        if (fileInfo.exists) {
            if (changedTimestamp && changedTimestamp > fileInfo.modificationTime) {
                try {
                    await FileCacheManager.updateCachedFile(uri, fileLocation);
                } catch (ex) {
                    return Promise.reject('Error while caching remote file');
                }
            }
            return FileCacheManager.getContentAsString(key);
        } else {
            try {
                await FileCacheManager.updateCachedFile(uri, fileLocation);
            } catch (ex) {
                return Promise.reject('Error while caching remote file');
            }
            return FileCacheManager.getContentAsString(key);
        }
    }

    static async updateCachedFile(uri, fileLocation) {
        const resumableDownload = await FileSystem.createDownloadResumable(uri, fileLocation, {});
        try {
            const response = await resumableDownload.downloadAsync();
            if (response && response.status !== 200) {
                resumableDownload.pauseAsync();
                FileSystem.deleteAsync(fileLocation, {idempotent: true});
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async get(key) {
        const fileLocation = FileCacheManager.getCacheKey(key);
        try {
            return await FileSystem.getContentUriAsync(fileLocation);
        } catch (ex) {
            return Promise.reject(ex);
        }
    }

    static async getContentAsString(key) {
        const fileLocation = FileCacheManager.getCacheKey(key);
        try {
            return await FileSystem.readAsStringAsync(fileLocation);
        } catch (ex) {
            return Promise.reject(ex);
        }
    }

    static getCacheKey(key) {
        return `${CACHE_FOLDER}${key}`;
    }
}
