(function () {
    'use strict';

    class Task {
        run() {
            console.log('123456');
        }
    }

    class User {
        constructor(task) {
            this.task = task;
        }
        do() {
            this.task.run();
        }
    }

    const task = new Task();
    const user = new User(task);
    user.do();

})();
