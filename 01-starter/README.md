# Step to run 

## 1. Create Docker image with Dockerfile

### Service 1
```
$cd service1
$docker build -t somkiat/service1 .
$docker image ls
```

### Service 2
```
$cd service2
$docker build -t somkiat/service2 .
$docker image ls
```

### Service 3
```
$cd service3
$docker build -t somkiat/service3 .
$docker image ls
```

## 3. Push Docker image to Docker registry (Default at [Docker Hub](https://hub.docker.com/))

```
$docker login
$docker push somkiat/service1
$docker push somkiat/service2
$docker push somkiat/service3
```

## 3. Create Docker image with docker-compose

### Step 1 : Using docker-compose to build image
```
$docker-compose build
```

### Step 2 : Using docker-compose to run containers
```
Build all services
$docker-compose up -d
$docker-compose -f docker-compose.yml up -d

See all containers
$docker-compose ps

Delete all containers
$docker-compose down
```

## 4. Scaling services with docker-compose

```
$docker-compose up --scale service2=3
```

Try to scale service1 with Load balance (nginx)

```
$docker-compose -f docker-compose-lb.yml up --scale service1=3
```