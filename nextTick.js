var async = require('async');

/**
 * async.nextTick的作用与nodejs的nextTick一样，都是把某个函数调用放在队列的尾部。但在浏览器端，只能使用setTimeout(callback,0)，但这个方法有时候会让其它高优先级的任务插到前面去。
 *
 * 所以提供了这个nextTick，让同样的代码在服务器端和浏览器端表现一致。
 */
// nextTick(callback)

var calls = [];

async.nextTick(function() {
    calls.push('two');
});

calls.push('one');

async.nextTick(function() {
    console.log(calls); // -> [ 'one', 'two' ]
});
