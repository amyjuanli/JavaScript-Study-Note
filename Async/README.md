# ASYNCHRONOUS PROGRAMMING 

## Approach one - callbacks
One approach to asynchronous programming is to make functions that perform a *slow* action take an extra argument, 
a *callback function*.
Asynchronicity is contagious 
Any function that calls function that works asynchronously must itself be asynchronous, using a callback or similar
mechanism to deliver its result.

## Approach two - promise
*Promises* are built over *callbacks*. They provide a cleaner way for running asynchronous tasks and also provide
catching mechanism. 