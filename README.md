A collection of commonly used tool functions, including:

1. Verify data type
2. Anti shake
3. Throttling
4. Phone number desensitization
5. Enable full screen
6. Turn off full screen
7. Case conversion

Install it

```
pnpm install handle-tool
```

Specific usage:

1.  Verify data type

```javascript
import { typeOf } from 'handle-tool';

typeOf([]); // array
typeOf(new Date()); // date
typeOf(null); // null
typeOf(true); // boolean
typeOf(() => {}); // function
//[{id: 1, name: 'noah', age: 18]
```

2. Anti shake

```javascript
import { debounce } from 'handle-tool';

const loadList = () => {
  debounce(() => {
    console.log('Loading Data');
  }, 500);
};
loadList();
//[{id: 1, a: 123, b: 1234, boo: true}，{id: 2, a: 123, b: 1234, boo: false}]
```

3. Throttling

```javascript
import { throttle } from 'handle-tool';
```

4. Phone number desensitization

```javascript
import { hideMobile } from 'handle-tool';
hideMobile('13788895634');
//  137****5634
```

5. Enable full screen

```javascript
import { launchFullscreen } from 'handle-tool';
```

6.  Turn off full screen

```javascript
import { exitFullscreen } from 'handle-tool';
```

7. Case conversion

```javascript
import { turnCase } from 'handle-tool';
// Str string to be converted
// Type 1- All uppercase 2- All lowercase 3- First letter uppercase
turnCase('react', 1); // REACT
```
