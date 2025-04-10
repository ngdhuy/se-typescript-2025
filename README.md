# se-typescript-2025
The project is used for training TypeScript

## Note

Create file build.sh

```shell
#!/bin/bash
filename=$(basename "$1")
name="${filename%.*}" 
js_file="$name.js"

tsc && node bin/"$js_file"
```

Change mod execute for file build.sh 

```shell
chmod +x build.sh
```

Run build File.ts with command

Config scrprit in package.json

```json
"scripts": {
        "build": "./build.sh"
    }
```

And run command to build file *ts and run <file-name.ts>.
```shell
yarn build <file-name.ts>
```

