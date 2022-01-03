# stat-borquez
*stat-borquez* is a CLI node module created to perform basic arithmetic operations.

## Installation
To install, simply run the following command on your the command line
```bash
$ npm install stat-borquez
```
Then, to install dependencies you should run
```bash
$ npm install
```
And you should be ready to use the CLI tool.

## Usage
*stat-borquez* provides the following commands
### Sum
Finds the sum of *n* numbers
```bash
> node stat sum 1 2 3 4 5 6
21
```
### Average
Finds the average of *n* given numbers
```bash
> node stat avg 1 2 3 4 5 6
3.5
```
### Maximum
Finds the maximum between *n* numbers
```bash
> node stat max 1 2 3 4 5 6
6
```
### Mean of Points
Computes the mean of the given 2D points, P1, P2, ..., PN. The coordinates of 2D points are given as a ‘ ’-separated list of 2N integers, such as X1 Y1 X2 ... YN
where Xi and Yi are the x- and y-coordinate of Pi, respectively.
```bash
> node stat mean2 1 2 3 4
2 3
```
### Median of Points
Finds the median point of the given points. The median point is a point
that minimizes the sum of distances to other points. If there are multiple median points with the same distance, it prints out the coordinates of
the one that appears in the input first.
```bash
> node stat med2 1 1 2 2 3 3 1 3
2 2
```
### Pareto Command
The pareto command finds points that are on the Pareto front. A point Pi is on the Pareto front if there is no point Pj that “dominates” Pi,
i.e., Xi < Xj and Yi < Yj. 
Prints out the coordinates of the points on the Pareto front on separate lines in the order that they appear in the input.
```bash
> node stat pareto 4 1 3 2 2 3 1 4
4 1
3 2
2 3
1 4
> node stat pareto 2 3 4 5 5 3
4 5
5 3
```
