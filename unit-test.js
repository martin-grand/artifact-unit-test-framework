;(function (framework) {
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = framework();
	} else {
		this.ArtifactUnitTestFramework = framework();
	}

})(function () {
	var exports = {};

	function test(testMethod, callback) {
		var time = new Date().getTime();

		testMethod(function (success) {
			callback({
				time   : new Date().getTime() - time,
				success: success
			});

		});

	}

	function testAll(tests, callback) {
		var testName,
			runs = 0,
			testsLength = getObjectSize(tests),
			results = {},
			stat = {
				success : 0,
				fail    : 0,
				testTime: 0
			};

		for (testName in tests) {
			if (tests.hasOwnProperty(testName)) {
				test(tests[testName], function (result) {
					stat.testTime += result.time;
					results[testName] = result;
					runs++;

					if (result.success) {
						stat.success++;
					} else {
						stat.fail++;
					}

					if (runs === testsLength) {
						callback({
							passed : stat.fail === 0,
							stat   : stat,
							results: results
						});

					}

				});

			}

		}

	}

	function getObjectSize(object) {
		var size = 0,
			key;

		for (key in object) {
			if (object.hasOwnProperty(key)) {
				size++;
			}

		}

		return size;

	}

	exports.test = test;
	exports.testAll = testAll;
	return exports;

});
