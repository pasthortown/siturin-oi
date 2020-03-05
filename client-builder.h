#!/bin/bash
cd client
ng build --base-href "http://siturin-pruebas.turismo.gob.ec/" --prod
rm -R ./../ClientBuild/
cp -R ./dist/client/ ./../ClientBuild/
cd ..
git add .
git commit -m builded
git push https://pasthortown:1509Charles*@github.com/pasthortown/siturin --all
