#!/usr/bin/env bash
cd src/app/modules/lib
rm -rf ./build_temp
cp -R ./src ./build_temp
node build.js