# TeXcount-graph

This is a little programm to track your progress :)

## Install
### CI / CD
Add following code to your CI:
```bash
perl texcount.pl chapters/*.tex | tee count.log
COUNT=$(grep -e Total -A 1 count.log | tail -1 | cut -d: -f 2 | sed 's/ //')
curl -s -X POST --data count=${COUNT} --data hash=${COMMIT_HASH} yoururl/commit
 ```

### docker-compose
To deploy use the `docker-compose.yml`, you then can call the URL where it is hosted, a POST to /commit can add data.
 
## Develop
```bash
npm install
npm run dev
# Go to http://localhost:3000
```