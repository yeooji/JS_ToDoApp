/* 01. 기초 기능 만들기 */
(function () {
    const todos = [
        { contents: '코딩하기', done: false },
        { contents: '운동하기', done: true },
        { contents: '청소하기', done: false}
    ];
    
    // console.log(todos);
    // console.log('1 : ' + countLeftTodo(todos));
    // addTodo(todos, '밥먹기');
    // makeDone(todos[0]);
    // makeDone(todos[todos.length - 1]);
    // console.log(todos);
    // console.log('2 : ' + countLeftTodo(todos));

    function addTodo(todos, contents) {
        const newTodo = {
            contents: contents,
            done: false
        };
        todos.push(newTodo);
    };

    function makeDone(todo) {
        todo.done = true;
    };

    function countLeftTodo(todos) {
        return todos.reduce((prev, curr) => (curr.done === false) ? prev + 1 : prev, 0);
    };
})();