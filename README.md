# Typechain

- Typescript

### why typescript?
- superset of javascript
- predictable, readable
- prevent stupid mistake
    > e.g) missing parameter <br>
    > <code>const sayHi = (name, age, gender?) => {}</code>

<pre>
<code>
yarn init
yarn global add typescript
tsc // compile


/* package.json */
  "scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
  
>> yarn start

/* package.json */
yarn add tsc-watch --dev
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js \" "
  }
/* tsconfig.json */
    "complierOptions": {
        ...,
        "outDir": "dist"
    }
    "include": ["src/**/*"],

</code>


</pre>

1. make tsconfig.json
2. Write
