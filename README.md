# chordsequence

## install



```
[execute nginx setup]
[execute map virtual directories setup]
[execute nodejs setup]

sudo -i
cd /opt

git clone https://github.com/jimareed/chordsequence
mkdir /usr/share/nginx/html/images
cp /opt/chordsequence/html/images/* /usr/share/nginx/html/images

git clone https://github.com/jimareed/chordpro-editor
cd /opt/chordpro-editor
npm install
node server &
```


** nginx setup **

```
sudo -i
yum install nginx
service nginx start
```

** nodejs setup

```
sudo -i
curl -sL https://rpm.nodesource.com/setup | bash -
yum install -y nodejs
```


** map virtual directories **

```
sudo -i
cd /etc/nginx
vi nginx.conf
add proxy_pass:
  server {
    ...
    location /edit {
      proxy_pass http://localhost:3000;
    }
  }

service nginx restart
```
