# Expo Remote File Cache

Expo remote file cache for caching string files from a given uri.

## Installation

```
npm install @meecode/expo-cached-remote-files --save
```

## Peer Dependencies

- `expo-file-system`

### Methods

```typescript
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
```

## Usage

### getOrCache

Saves the file from the given URI or retrieves the cached file content if already present.
Note that the key must be unique, otherwise files will be overwritten with different content.

````typescript
import {FileCacheManager} from '@meecode/expo-cached-remote-files'

  FileCacheManager
    .getOrCache(`https://xyz.test.at/api/v1/faqs?language=${i18n.locale}`, `faq-${i18n.locale}`)
    .then((response: any) => {
        if (response) {
           //TODO: implement
        } else {
            console.error('Response is empty', response);
        }
    });
````

### get

Get a cached file uri by the key

````typescript
import {FileCacheManager} from '@meecode/expo-cached-remote-files'

  FileCacheManager
    .get(`faq-${i18n.locale}`)
    .then((response: any) => {
        //TODO: implement
    });
````

### getContentAsString

### getLastModifiedTimeStamp

## TODOs

See [TODOs](TODO.md)
