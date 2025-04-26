#!/bin/bash
filename=$(basename "$1")
name="${filename%.*}" 
js_file="$name.js"

tsc && node bin/"$js_file"