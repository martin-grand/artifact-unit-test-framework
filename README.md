# artifact-unit-test-framework
A unit test framework for artifact projects

## usage examples:

```js
ArtifactUnitTestFramework.testAll({
  'success test': function (resolve) {
    resolve(1 === 1);
  },
  
  'fail test': function (resolve) {
    resolve(1 === 0);
  }
  
}, function (unitTestResult) {
    // do your stuff here
});
```

## example unit test result:
  
```json  
{
	"passed" : false,
	"stat"   : {
		"success": 1,
		"fail": 1,
		"testTime": 0
	},
	"results": {
		"success test": {
			"time": 0,
			"success": true
		}, 
		"fail test": {
			"time": 0,
			"success": false
		}
	}
}
```
