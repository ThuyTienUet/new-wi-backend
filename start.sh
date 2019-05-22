#!/bin/bash
docker pull thuytien/new-wi-backend:1.0.0
docker run --name demo -it t thuytien/new-wi-backend
exec $@