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

## TODOs

- [ ] Support for binary files
