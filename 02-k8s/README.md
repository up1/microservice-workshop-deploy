## Step to deploy

```
Create deployment (Deployment -> ReplicaSet -> Pods)
$kubectl create -f service1-deployment.yml

Create service
$kubectl create -f service1-service.yml

See results
$kubectl get pod -o wide
kubectl get rs
$kubectl get deploy
$kubectl get service
```

## Scale deployment
```
$kubectl get deploy
$kubectl scale deployment service1 --replicas=5
$kubectl get deploy -w
```

## Update new version of Docker image on deployment
```
$kubectl set image deployment/service1 service1=somkiat/service2:v2

See result/progress
$kubectl rollout status deployment/service1
```

## Remove all
```
$kubectl create -f service1-deployment.yml
$kubectl create -f service1-service.yml
```