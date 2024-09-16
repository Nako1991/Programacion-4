"use strict"

class Stopwatch {
    constructor() {
        this.intervalId = null;
        this.startTime = null;
        this.elapsedTimeMs = 0;
        this.isRunning = false;
    }

    start() {
        if ( !this.isRunning ) {
            this.startTime = new Date();
            this.intervalId = setInterval(
                , 1);
            this.isRunning = true;
        }
    }

    stop() {
        if ( this.isRunning ) {
            clearInterval(intervalId);
            this.elapsedTimeMs = new Date() - this.startTime;
            this.isRunning = false;
        }
    }
}

const stopwatch = new Stopwatch();