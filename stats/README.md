The disabled-tests-condensed.json files is in the [generated-stats branch].

The slow-tests.json is in [test/slow_tests.json in pytorch/pytorch] (moved [pytorch/pytorch #132379] and [pytorch/test-infra #5544]). The auto slow test infra and the lack of pinning between pytorch and test-infra made it difficult to tell if a test started failing because of a change or because the slow test json changed. While this lack of synchronization can have benefits, like disable test issues being effective everywhere immediately, immediate marking of slow tests does not provide as much benefit as immediate disabling of a test, and we don't have the same visibility into slow tests like we do for disable issues. Even if a slow-test.json still exists on the generated-stats branch, it should not have an effect on pytorch CI unless the CI is being run on an old branch.


[generated-stats branch]: https://github.com/pytorch/test-infra/tree/generated-stats/stats
[test/slow_tests.json in pytorch/pytorch]: https://github.com/pytorch/pytorch/blob/9d5c85c499fc03e774fd8173de73ee939ae0bed8/test/slow_tests.json#L1
[pytorch/pytorch #132379]: https://github.com/pytorch/pytorch/pull/132379
[pytorch/test-infra #5544]: https://github.com/pytorch/test-infra/pull/5544
