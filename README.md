# TeXcount-graph

This is a little programm to track your progress :)

## Install
Add following code to your CI:
```bash
perl texcount.pl chapters/*.tex | tee count.log
COUNT=$(grep -e Total -A 1 count.log | tail -1 | cut -d: -f 2 | sed 's/ //')
curl -s -X POST --data count=${COUNT} --data hash=${COMMIT_HASH} yoururl/commit
 ```
