#!/bin/bash

hash heroku 2>/dev/null || { echo >&2 "I require heroku but it's not installed.  Aborting."; exit 1; }
heroku git:remote -a mhacks-prototype 
