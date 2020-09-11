Setup MongoDB Atlas account
https://www.mongodb.com/cloud/atlas/signup
Create a new cluster
Select the free tier
Can choose any provider - such as AWS
Can choose any region close to you

Security > atabase Access
+Ad new database user
add username/password
change privileges to atlas admin
prettyawesome007
underdog007

security > network access
add ip address
allow access from anywhere

click collections from clusters
click add my own data
add database name and one collection name

connect to heroku
heroku create
select the app in heroku
go to settings
config vars
MONGODB_URI in the key
for the value:
click the connect button in the cluster's
select connect your application
copy the string
enter the string in the value field
upate user, password, and database
