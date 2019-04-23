# Open Node Backend

This repository is to help anyone to create a simple Node backend with the following features: 
* authentication with JWT Token
* database connection (Mongodb now) with CRUD operations

The node application is containerized with Docker

## Test 
make a GET request at the following url to get the current version:
http://[HOST]:7000/version/current

___
## Create your Configuration
Please create your *config.json* file, which must be at the same level as app.js file

```
{
    "mongodbUrl": "xxxxxxxxxxxxx"
}
```

___
## Deploy procedure

* docker build -t [DockerHubUser]/open-node-backend:x.x.x .
* docker push [DockerHubUser]/open-node-backend:x.x.x
* docker run --name open-node-backend -p 7000:7000 -d [DockerHubUser]/open-node-backend:x.x.x
* docker logs -f open-node-backend
