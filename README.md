# Expo Remote File Cache

Expo remote file cache for caching string files from a given uri.

## Installation

```
npm install @meecode/expo-cached-remote-files --save
```

## Peer Dependencies

- `expo-file-system`

## Usage

### getOrCache

Saves the file from the given URI or retrieves the cached file content if already present.
Note that the key must be unique, otherwise files will be overwritten with different content.

````javascript
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

````javascript
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

- [ ] Support for binary files
