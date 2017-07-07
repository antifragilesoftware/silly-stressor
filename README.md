# silly-stressor

Exploration of a Docker-Packaged stressor.

## Prerequisites

You will need Docker installed. For example, on a Mac consider installing [Docker Community Edition for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac).

## Run using Docker from pre-packaged Docker Image

To execute the current build of this stressor:

```shell
> docker run -it --rm --name my-silly-stressor antifragilesoftware/silly-stressor:initial

```

## Build image

Execute the following to build the docker image locally for this stressor:

```shell
> docker build -t antifragilesoftware/silly-stressor .
```

## Run using Docker from build image

```shell
> docker run -it --rm --name my-silly-stressor antifragilesoftware/silly-stressor
```

