#!/bin/bash
cd /home/proyectos/siturin
node refresher.js &
cd client
ng serve --host=0.0.0.0

