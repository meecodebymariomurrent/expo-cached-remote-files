export class FileCacheManager {
    /**
     * Caches a file with the given uri and key when the timestamp is newer
     *
     * @param uri the uri of the file to cache
     * @param key the cache key to use. must be unique for every file
     * @param changedTimestamp the timestamp to check if the cached file is newer or not. default is undefined
     *
     * @returns the file path
     */
    static getOrCache(uri: string, key: string, changedTimestamp?: number): Promise<string>;

    /**
     * Gets a cached file uri by the cache key
     *
     * @param key the cache key to use
     *
     * @returns the file path
     */
    static get(key: string): Promise<string>;

    /**
     * Gets the cached file content by cache key
     *
     * @param key the cache key to use
     *
     * @returns the file content as string
     */
    static getContentAsString(key: string): Promise<string>;

    /**
     * Gets the last modified timestamp for a given cache key
     *
     * @param key the cache key to use
     *
     * @return the last modified timestamp
     */
    static getLastModifiedTimeStamp(key): Promise<number>;
}
