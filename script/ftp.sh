#!/bin/bash
ls
#HOST='copakluj.org'
#USER='u421383828.sudarshan'
#PASSWD='P@ssw0rd'

ftp -in $HOST <<END_SCRIPT
user $USER $PASSWD
mput dist/*
quit
END_SCRIPT

exit 0